import type { FnGetContext, MditCodeRendererMap, Plugin, Wrapper } from '../core/types'
import type { Component, ShallowRef, VNode } from 'vue'
import { uniqId } from '../utils/util'
import { nextTick, ref, Teleport, h } from 'vue'

export interface LangComponentMap {
  [lang: string]: [Component, object?]
}

export interface CodeBlock {
  id: string
  lang: string
  code: string
}

/**
 * render a code block using a user defined component
 */
class CustomCodeBlockRendererPlugin implements Plugin {
  name: string = 'core-plugin-custom-code-block-renderer'
  mditCodeRendererMap: MditCodeRendererMap
  langComponentMap: LangComponentMap
  codeBlocks: CodeBlock[]
  extraVnodes: ShallowRef<VNode[]>
  codeBlockWrapperList: Wrapper[]

  constructor(langComponentMap: LangComponentMap) {
    this.langComponentMap = langComponentMap
    this.codeBlocks = []
    this.extraVnodes = ref([])
    this.codeBlockWrapperList = []

    const langs = Object.keys(langComponentMap)
    this.mditCodeRendererMap = {}
    langs.forEach((lang) => {
      this.mditCodeRendererMap[lang] = this.mditCodeRenderer
    })
  }

  init(getContext: FnGetContext) {
    const context = getContext()
    const pluginManager = context.pluginManager!
    this.codeBlockWrapperList = pluginManager.getCodeBlockWrapperList()
  }

  mditBeforeRender() {
    this.codeBlocks = []
  }

  mditCodeRenderer(code: string, lang: string): string {
    const id = uniqId()

    this.codeBlocks.push({
      lang,
      code,
      id,
    })

    return `<pre class="sm-custom-code-block-renderer ${lang}" id="${id}"></pre>`
  }

  mditAfterRender() {
    nextTick(() => {
      if (this.codeBlocks.length === 0 || !document.getElementById(this.codeBlocks[0].id)) {
        return
      }
      const vnodes: VNode[] = []
      this.codeBlocks.forEach((codeBlock) => {
        vnodes.push(this.renderCodeBlockComponent(codeBlock))
      })
      this.extraVnodes.value = vnodes
    })
  }

  renderCodeBlockComponent(codeblock: CodeBlock) {
    const [component, props] = this.langComponentMap[codeblock.lang] ?? this.langComponentMap.default

    const renderCompoent = h(component, {
      lang: codeblock.lang,
      code: codeblock.code,
      ...props,
      key: codeblock.id
    })
    return h(Teleport, {
      to: `#${codeblock.id}`,
    }, [renderCompoent])
  }
}

function customCodeBlockRenderer(langComponentMap: LangComponentMap): Plugin {
  return new CustomCodeBlockRendererPlugin(langComponentMap)
}

export default customCodeBlockRenderer
export { CustomCodeBlockRendererPlugin }