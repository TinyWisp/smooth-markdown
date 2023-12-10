import type { Plugin } from '../core/types'
import 'overlayscrollbars/overlayscrollbars.css'

class InjectCssPlugin implements Plugin {
  name: string = 'core-plugin-inject-css'
  css: string

  constructor(css: string) {
    this.css = css
  }
}

function injectCss(css: string) {
  return new InjectCssPlugin(css)
}

export default injectCss