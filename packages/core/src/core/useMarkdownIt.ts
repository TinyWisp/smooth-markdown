import { ref, watch, computed } from 'vue'
import type { Ref, VNode } from 'vue'
import MarkdownIt from 'markdown-it'
import { escapeHtml } from 'markdown-it/lib/common/utils'
import type { PluginManager } from './PluginManager'
import type { Heading, MditCodeRendererMap, MditInitOptions, MditLoadPlugin } from './types'
import type { Token as MditToken } from 'markdown-it'
import { uniqId } from '../utils/util'

export interface MarkdownItContext {
  instance: any
  html: Ref<string>
  headingList: Ref<Heading[]>
}

export function useMarkdownIt(doc: Ref<string>, elem: Ref<HTMLElement | null>, pluginManager: PluginManager): MarkdownItContext {
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

  const headingList: Ref<Heading[]> = ref([])
  function retrieveHeadingList(tokens: MditToken[]) {
    const tmpHeadingList: Heading[] = []

    for (let tidx=0; tidx<tokens.length-2; tidx++) {
      const token = tokens[tidx]
      if (token.type !== 'heading_open') {
        continue
      }

      const headingId = uniqId()
      token.attrSet('id', headingId)

      const ntoken = tokens[tidx + 1]
      tmpHeadingList.push({
        level: token.markup.length,
        text: ntoken.children!.map((item) => item.content).join(''),
        id: token.attrGet('id')!,
        lineNum: token.map?.[0] ?? 0
      })
      tidx += 2
    }

    headingList.value = tmpHeadingList
  }

  function renderView(): void {
    pluginManager.mditBeforeRender()
    const env = {}
    const tokens = instance.parse(doc.value, env)
    retrieveHeadingList(tokens)
    html.value = instance.renderer.render(tokens, instance.options, env)
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
    html,
    headingList
  }
}