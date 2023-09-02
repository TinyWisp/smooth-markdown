import { h } from 'vue'
import type { ToolbarItemMap, VuetifyPlugin } from '@smooth-vue-markdown-editor/vuetify'
import LinkButton from './LinkButton.vue'

class ToolbarLinkBtnPlugin implements VuetifyPlugin {
  readonly name = 'ToolbarLinkBtnPlugin'
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

export default function toolbarLinkBtnPlugin() {
  return new ToolbarLinkBtnPlugin()
}