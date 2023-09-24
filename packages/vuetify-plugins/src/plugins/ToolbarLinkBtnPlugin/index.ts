import { h } from 'vue'
import type { ToolbarItemMap, VuetifyPlugin } from '@smooth-vue-markdown-editor/vuetify'
import LinkButton from './LinkButton.vue'

class ToolbarLinkBtnPlugin implements VuetifyPlugin {
  readonly name = 'vuetify-plugin-toolbar-link-btn'
  toolbarItemMap: ToolbarItemMap

  constructor() {
    this.toolbarItemMap = {
      link: {
        vnode: () => {
          return h(LinkButton)
        }
      }
    }
  }
}

export default function toolbarLinkBtn() {
  return new ToolbarLinkBtnPlugin()
}