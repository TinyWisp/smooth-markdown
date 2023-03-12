import type { CorePlugin } from './CorePlugin'
import type { CodeRendererMap } from './CorePlugin'
import { uniqId, escapeHtml } from '../utils/util'
import hljs from 'highlight.js/lib/common'
import copyToClipboard from 'copy-to-clipboard'

if (!Object.prototype.hasOwnProperty.call(window, 'svmeCopyCode')) {
  Object.defineProperty(window, 'svmeCopyCode', { value: function (code: string) {
    copyToClipboard(decodeURIComponent(code))
  }})
}

class HighlightPlugin implements CorePlugin {
  name: string
  codeRendererMap: CodeRendererMap

  constructor() {
    this.name = 'highlight'
    this.codeRendererMap = {
      default: this.highlightCodeRenderer,
    }
  }

  highlightCodeRenderer(code: string, lang: string): string {
    if (lang.length === 0 && code.length === 0) {
      return '<pre class="nothing"></pre>'
    }

    const hlId: string = uniqId()
    const html: string = `<pre data-hl-id="${hlId}" class="svme-codeblock">`
                        + `<span class="svme-codeblock-lang">${lang}</span>`
                        + `<div class="svme-codeblock-copy"></div>`
                        + `<code class="language-${lang} hljs">${escapeHtml(code)}</code>`
                      + `</pre>`
    setTimeout(() => {
      const containerEl: Element | null = document.querySelector(`[data-hl-id="${hlId}"]`)
      const codeEl: Element | null | undefined = containerEl?.children?.item(2)
      const copyEl: Element | null | undefined = containerEl?.children?.item(1)
      codeEl && hljs.highlightElement(codeEl as HTMLElement)
      copyEl && copyEl.addEventListener('click', () => {
        copyToClipboard(code)
      })
    }, 0)

    return html
  }

}

export default function highlightPlugin() {
  return new HighlightPlugin()
}