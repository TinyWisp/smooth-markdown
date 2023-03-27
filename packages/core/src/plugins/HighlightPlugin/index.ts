import type { MditCodeRendererMap } from '@/CoreEditor/types'
import type { CorePlugin } from '../CorePlugin'
import { uniqId } from '../../utils/util'
import copyToClipboard from 'copy-to-clipboard'
import { minimalSetup, EditorView } from "codemirror"
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import type { LanguageDescription } from '@codemirror/language'
import type { Extension } from '@codemirror/state'
import { defaultTheme } from './defaultTheme'

interface LangDescMap {
  [lang: string]: LanguageDescription 
}

export interface HighlightPluginConfig {
  theme: Extension
}

class HighlightPlugin implements CorePlugin {
  readonly name: string = 'HighlightPlugin'
  mditCodeRendererMap: MditCodeRendererMap
  langDescMap: LangDescMap
  defaultThemeExtension: Extension
  cmMarkdownConfig: object

  constructor() {
    this.cmMarkdownConfig = {codeLanguages: languages}
    this.mditCodeRendererMap = {
      default: this.highlightCodeRenderer,
    }
    this.defaultThemeExtension = defaultTheme 
    this.langDescMap = {}
    languages.forEach((lang) => {
      const names: string[] = [lang.name.toLowerCase(), ...lang.alias, ...lang.extensions]
      names.forEach((langName) => {
        this.langDescMap[langName] = lang
      })
    })
  }

  highlightCodeRenderer(code: string, lang: string): string {
    if (lang.length === 0 && code.length === 0) {
      return '<pre class="nothing"></pre>'
    }

    const hlId: string = uniqId()
    const html: string = `<pre data-hl-id="${hlId}" class="svme-codeblock">`
                        + `<span class="svme-codeblock-lang">${lang}</span>`
                        + `<div class="svme-codeblock-copy"></div>`
                        + `<code class="language-${lang}"></code>`
                      + `</pre>`
    setTimeout(async () => {
      const extensions: Extension[] = [minimalSetup, this.defaultThemeExtension]
      if (this.langDescMap[lang]) {
        const langSupport = await this.langDescMap[lang].load()
        const ext = langSupport
        extensions.push(ext)
      }

      const containerEl: Element | null = document.querySelector(`[data-hl-id="${hlId}"]`)
      const codeEl: Element | null | undefined = containerEl?.children?.item(2)
      const copyEl: Element | null | undefined = containerEl?.children?.item(1)
      if (codeEl && copyEl) {
        copyEl && copyEl.addEventListener('click', () => {
          copyToClipboard(code)
        })
        new EditorView({
          doc: code,
          extensions,
          parent: codeEl 
        })
      }
    }, 0)

    return html
  }
}

export default function highlightPlugin() {
  return new HighlightPlugin()
}