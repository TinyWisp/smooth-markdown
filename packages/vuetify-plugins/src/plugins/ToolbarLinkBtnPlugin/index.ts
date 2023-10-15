import type { ToolbarItemMap, VuetifyPlugin } from '@smooth-vue-markdown-editor/vuetify'
import LinkButton from './LinkButton.vue'

class ToolbarLinkBtnPlugin implements VuetifyPlugin {
  readonly name = 'vuetify-plugin-toolbar-link-btn'
  toolbarItemMap: ToolbarItemMap

  constructor() {
    this.toolbarItemMap = {
      link: { comp: LinkButton }
    }
  }
}

export default function toolbarLinkBtn() {
  return new ToolbarLinkBtnPlugin()
}