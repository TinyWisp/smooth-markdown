import type { FnGetContext, Context, MditCodeRendererMap, MditRendererRuleMap, Plugin, Wrapper } from '../../core/types'
import type { Component, ShallowRef, VNode, Ref } from 'vue'
import { uniqId } from '../../utils/util'
import { nextTick, ref, h } from 'vue'
import type { Token as MditToken } from 'markdown-it'
import { unescapeAll } from 'markdown-it/lib/common/utils'
import type { CodeBlockMap, LangComponentMap } from './types'
import CodeBlockRenderer from './CodeBlockRenderer.vue'

/**
 * render a code block using a user defined component
 */
class CustomCodeBlockRendererPlugin implements Plugin {
  name: string = 'custom-code-block-renderer'
  mditCodeRendererMap: MditCodeRendererMap
  mditRendererRuleMap: MditRendererRuleMap
  langComponentMap: LangComponentMap
  codeBlockMap: Ref<CodeBlockMap>
  nextCodeBlockMap: CodeBlockMap
  extraVnodes: ShallowRef<VNode[]>
  codeBlockWrapperList: Wrapper[]
  context?: Context
  lineCount: number

  constructor(langComponentMap: LangComponentMap) {
    this.langComponentMap = langComponentMap
    this.codeBlockMap = ref({})
    this.nextCodeBlockMap = {}
    this.lineCount = 0
    this.extraVnodes = ref([h(CodeBlockRenderer, {
      langComponentMap: this.langComponentMap,
      codeBlockMap: this.codeBlockMap
    })])
    this.codeBlockWrapperList = []
    this.mditRendererRuleMap = {
      fence: this.mditFenceRule.bind(this)
    }

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
    this.context = context
  }

  mditFenceRule(tokens: MditToken[], idx: number, options?: object, env?: object, slf?: object) {
    const token = tokens[idx]
    const info = token.info ? unescapeAll(token.info).trim() : ''
    const lineBegin = token.map?.[0] ?? -1
    const lineEnd = token.map?.[1] ?? -1
    let langName = ''
    let langAttrs = ''

    if (info) {
      const arr = info.split(/(\s+)/g);
      langName = arr[0];
      langAttrs = arr.slice(2).join('');
    }

    return this.mditCodeRenderer(token.content.slice(0, -1), langName, langAttrs, lineBegin, lineEnd)
  }

  mditBeforeRender() {
    const cmEditorView = this.context!.editor.cmEditorView.value
    this.lineCount = cmEditorView
      ? cmEditorView.state.doc.lines
      : 0
  }

  mditCodeRenderer(code: string, lang: string, langAttrs: string, lineBegin: number, lineEnd: number): string {
    const positivePos = lineBegin
    const negativePos = lineBegin - this.lineCount

    if (this.codeBlockMap.value[positivePos] && this.codeBlockMap.value[positivePos].lang === lang) {
      this.nextCodeBlockMap[positivePos] = this.codeBlockMap.value[positivePos]
      this.nextCodeBlockMap[positivePos].code = code
      this.nextCodeBlockMap[positivePos].lineEnd = lineEnd
      this.nextCodeBlockMap[negativePos] = this.nextCodeBlockMap[positivePos]

    } else if (this.codeBlockMap.value[negativePos] && this.codeBlockMap.value[negativePos].lang === lang) {
      this.nextCodeBlockMap[negativePos] = this.codeBlockMap.value[negativePos]
      this.nextCodeBlockMap[negativePos].code = code
      this.nextCodeBlockMap[negativePos].lineBegin = lineBegin
      this.nextCodeBlockMap[positivePos] = this.nextCodeBlockMap[negativePos]
    } else {
      const id = uniqId()
      const codeBlock = {
        lineBegin,
        lineEnd,
        langAttrs,
        lang,
        code,
        id
      }
      this.nextCodeBlockMap[positivePos] = codeBlock
      this.nextCodeBlockMap[negativePos] = this.nextCodeBlockMap[positivePos]
    }

    const id = this.nextCodeBlockMap[positivePos].id
    return `<pre class="sm-custom-code-block-renderer ${lang}" id="${id}"></pre>`
  }

  mditAfterRender() {
    nextTick(() => {
      this.codeBlockMap.value = this.nextCodeBlockMap
      this.nextCodeBlockMap = {}
    })
  }
}

function customCodeBlockRenderer(langComponentMap: LangComponentMap): Plugin {
  return new CustomCodeBlockRendererPlugin(langComponentMap)
}

export default customCodeBlockRenderer
export { CustomCodeBlockRendererPlugin }