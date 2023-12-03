import { ref, watch, computed } from 'vue'
import type { Ref, VNode } from 'vue'
import MarkdownIt from 'markdown-it'
import { escapeHtml } from 'markdown-it/lib/common/utils'
import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import ins from 'markdown-it-ins'
import br  from 'markdown-it-br'
import mark from 'markdown-it-mark'
import deflist from 'markdown-it-deflist'
// import emoji from 'markdown-it-emoji/bare.js'
import type { PluginManager } from './PluginManager'
import type { MditCodeRendererMap, MditInitOptions, MditLoadPlugin } from './types'

export interface MarkdownItContext {
  instance: any
  html: Ref<string>
}

export function useMarkdownIt(doc: Ref<string>, elem: Ref<HTMLElement | null>, pluginManager: PluginManager): MarkdownItContext {
  const html: Ref<string> = ref('')

  const initOptions: MditInitOptions = {
    breaks: true,
    highlight: renderCode,
    ...pluginManager.getMditInitOptions()
  }
  const loadPlugins: MditLoadPlugin[] = [
    [ sup ],
    [ sub ],
    [ ins ],
    [ br ],
    [ mark ], 
    [ deflist ],
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
    html.value = instance.render(doc.value)
    elem.value && (elem.value.innerHTML = html.value)
    pluginManager.mditAfterRender()
  }

  const instance: any = new MarkdownIt(initOptions)
  loadPlugins.forEach((params: any) => {
    instance.use(...params)
  })
  Object.assign(instance.renderer.rules, pluginManager.getMditRendererRuleMap())

  watch(
    [doc, elem],
    () => {
      elem.value && renderView()
    }, 
    {
      immediate: true
    }
  )

  return {
    instance,
    html
  }
}