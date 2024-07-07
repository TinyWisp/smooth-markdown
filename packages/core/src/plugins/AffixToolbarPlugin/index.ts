import VueAffix from './VueAffix.vue'
import type { FnGetContext, Plugin, Wrapper } from '../../core/types'
import { onMounted } from 'vue'

class AffixToolbarPlugin implements Plugin {
  name: string = 'affix-toolbar'
  toolbarWrapper?: Wrapper
  props: {[key: string]: any}

  constructor(props: {[key: string]: any} = {}) {
    this.props = JSON.parse(JSON.stringify(props))
  }

  init(getContext: FnGetContext) {
    const props = this.props
    const context = getContext()

    if (!props.relativeElementSelector && context.root.selector) {
      props.relativeElementSelector = context.root.selector
    }

    if (!props.offset) {
      props.offset = { top: 0, bottom: 0 }
    }

    this.toolbarWrapper = [VueAffix, props, 'vueAffix']

    onMounted(() => {
      const injectCss = context.injectCss
      const headerEl = context.header.el!.value

      if (headerEl) {
        const headerElWidth = headerEl?.clientWidth
        const headerElHeight = headerEl?.clientHeight
        injectCss(`
          &header .vue-affix { width: ${headerElWidth}px !important; height: ${headerElHeight}px !important; z-index: 999;}
          &header { height: ${headerElHeight}px !important;}
        `)
      }
    })
  }
}

function affixToolbar(props: {[key: string]: any} = {}) {
  return new AffixToolbarPlugin(props)
}

export default affixToolbar