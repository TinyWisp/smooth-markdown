import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import MarkdownIt from 'markdown-it'
import { escapeHtml } from 'markdown-it/lib/common/utils'
import type { FnGetContext, FnSetContext, Heading, MditCodeRendererMap, MditInitOptions, MditLoadPlugin } from './types'
import type { Token as MditToken } from 'markdown-it'
import { uniqId } from '../utils/util'


export function useViewer(getContext: FnGetContext, setContext: FnSetContext) {
  const context = getContext()
  const doc = context.doc!
  const pluginManager = context.pluginManager!
  const viewerEl = context.viewer.el!

  const html: Ref<string> = ref('')

  const initOptions: MditInitOptions = {
    breaks: true,
    highlight: renderCode,
    ...pluginManager.getMditInitOptions()
  }
  const loadPlugins: MditLoadPlugin[] = [
    ...pluginManager.getMditLoadPlugins()
  ]

  const codeRendererMap: MditCodeRendererMap = {...pluginManager.getMditCodeRendererMap()}

  function renderCode(code: string, lang: string): string {
    if (lang.length === 0 && code.length === 0) {
      return '<pre class="nothing"></pre>'
    }

    if (codeRendererMap[lang]) {
      return codeRendererMap[lang](code, lang)
    }

    if (codeRendererMap['default']) {
      return codeRendererMap['default'](code, lang)
    }

    return `<pre class="language-${lang}"><code>${escapeHtml(code)}</code></pre>`
  }

  function renderView(): void {
    pluginManager.mditBeforeRender()
    const env = {}
    const tokens = mditInstance.parse(doc.value, env)
    pluginManager.mditTransformTokens(tokens)
    html.value = mditInstance.renderer.render(tokens, mditInstance.options, env)
    viewerEl.value && (viewerEl.value.innerHTML = html.value)
    pluginManager.mditAfterRender()
  }

  const mditInstance: any = new MarkdownIt(initOptions)
  loadPlugins.forEach((params: any) => {
    mditInstance.use(...params)
  })
  Object.assign(mditInstance.renderer.rules, pluginManager.getMditRendererRuleMap())

  watch(
    [doc, viewerEl],
    () => {
      viewerEl.value && renderView()
    }, 
    {
      immediate: true
    }
  )

  setContext('viewer', 'markdownIt', mditInstance)
}