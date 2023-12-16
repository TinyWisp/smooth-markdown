import VueAffix from 'vue-affix/src/affix.vue'
import type { FnGetContext, Plugin, Wrapper, Context } from '../core/types'
import { onMounted } from 'vue'

class AffixToolbarPlugin implements Plugin {
  name: string = 'core-plugin-affix-toolbar'
  toolbarWrapper: Wrapper
  getContext?: FnGetContext | undefined;

  constructor(props: {[key: string]: any}) {
    this.toolbarWrapper = [VueAffix, props]
  }

  init() {
    onMounted(() => {
      const context: Context = (this.getContext!)()
      const injectCss = context.methods.injectCss
      const headerEl = context.doms.header.value

      if (headerEl) {
        const headerElWidth = headerEl?.clientWidth
        const headerElHeight = headerEl?.clientHeight
        injectCss(`& .vue-affix, & > .svme-header { width: ${headerElWidth}px !important; height: ${headerElHeight}px !important;}`)
      }
    })
  }
}

function affixToolbar(props: {[key: string]: any}) {
  return new AffixToolbarPlugin(props)
}

export default affixToolbar