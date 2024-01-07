import type { Ref } from 'vue'
import { computed } from 'vue'
import type { Context, Heading } from './types'
import { useActiveScroll } from 'vue-use-active-scroll'

class TocSpy {
  headingList: Ref<Heading[]>
  activeIndex: Ref<number>
  private targets: Ref<string[]>
  private usaSetActive: Function
  private context: Context

  constructor(headingList: Ref<Heading[]>, scrollElmRef: Ref<HTMLElement | null>, usaOptions: Object, context: Context) {
    this.context = context
    this.headingList = headingList
    this.targets = computed(() => {
      return headingList.value.map((item) => item.id)
    })

    const { activeIndex, setActive } = useActiveScroll(this.targets, {
      root: scrollElmRef,
      replaceHash: false,
      ...usaOptions
    })

    this.activeIndex = activeIndex
    this.usaSetActive = setActive
    this.setActive = this.setActive.bind(this)
  }

  setActive(idx: number) {
    const id = this.headingList.value[idx].id
    const targetElm = document.getElementById(id)
    if (targetElm) {
      targetElm.scrollIntoView()
      this.usaSetActive(id)

      const lineNum = this.headingList.value[idx].lineNum
      this.context.methods.scrollToLine(lineNum)
    }
  }
}

export { TocSpy }