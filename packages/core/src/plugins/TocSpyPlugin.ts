import type { Ref, ShallowRef } from 'vue'
import { computed, ref, shallowRef, watch } from 'vue'
import type { FnGetContext, FnSetContext, Heading, Plugin } from '../core/types'
import { useActiveScroll } from '../use-active-scroll'
import type { Token as MditToken } from 'markdown-it'
import { uniqId } from '../utils/util'

/**
 * context.toc.headingList.value
 * context.toc.activeIndex.value
 * context.toc.setActive
 */
class TocSpyPlugin implements Plugin {
  name: string = 'core-plugin-toc'
  headingList: ShallowRef<Heading[]>
  activeIndex: Ref<number>
  private uasSetActive?: Function
  private uasOptions: Object
  private getContext?: FnGetContext

  constructor(uasOptions: Object) {
    this.uasOptions = uasOptions
    this.headingList = shallowRef([])
    this.activeIndex = ref(0)
  }
 
  init(getContext: FnGetContext, setContext: FnSetContext) {
    this.getContext = getContext
    const context = getContext()

    const targets = computed(() => {
      return this.headingList.value.map((item) => item.id)
    })

    watch(this.headingList, () => {
      context.toc.headingList.value = this.headingList.value
    })

    const viewerScrollEl = context.viewer.scrollEl!

    const { activeIndex, setActive } = useActiveScroll(targets!, {
      root: viewerScrollEl,
      replaceHash: false,
      ...this.uasOptions
    })

    this.uasSetActive = setActive
    setContext('toc', 'setActive', this.setActive.bind(this))
    watch(activeIndex, () => {
      context.toc.activeIndex.value = activeIndex.value
    })
  }

  mditTransformTokens(tokens: MditToken[]) {
    const headingList: Heading[] = []

    for (let tidx=0; tidx<tokens.length-2; tidx++) {
      const token = tokens[tidx]
      if (token.type !== 'heading_open') {
        continue
      }

      const headingId = uniqId()
      token.attrSet('id', headingId)

      const ntoken = tokens[tidx + 1]
      headingList.push({
        level: token.markup.length,
        text: ntoken.children!.map((item) => item.content).join(''),
        id: token.attrGet('id')!,
        lineNum: token.map?.[0] ?? 0
      })
      tidx += 2
    }

    this.headingList.value = headingList
  }

  setActive(idx: number) {
    const id = this.headingList.value[idx].id
    const targetElm = document.getElementById(id)
    if (targetElm) {
      targetElm.scrollIntoView()
      this.uasSetActive!(id)

      const lineNum = this.headingList.value[idx].lineNum
      const context = this.getContext!()
      context.editor.scrollToLine(lineNum)
    }
  }
}

function tocSpy(uasOptions?: Object) {
  return new TocSpyPlugin(uasOptions ?? {})
}

export default tocSpy