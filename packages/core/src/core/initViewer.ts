import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import MarkdownIt from 'markdown-it'
import { escapeHtml } from 'markdown-it/lib/common/utils'
import type { FnGetContext, FnSetContext, MditCodeRendererMap, MditInitOptions, MditLoadPlugin } from './types'


export function initViewer(getContext: FnGetContext, setContext: FnSetContext) {
  const context = getContext()
  const doc = context.doc!
  const pluginManager = context.pluginManager!
  const viewerEl = context.viewer.el!

  const html: Ref<string> = ref('')

  const initOptions: MditInitOptions = {
    breaks: true,
    ...pluginManager.getMditInitOptions()
  }
  const loadPlugins: MditLoadPlugin[] = [
    ...pluginManager.getMditLoadPlugins()
  ]

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