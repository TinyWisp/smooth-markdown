import { h } from 'vue'
import type { ToolbarItemMap, VuetifyPlugin } from '@smooth-vue-markdown-editor/vuetify'
import TableButton from './TableButton.vue'

class ToolbarTableBtnPlugin implements VuetifyPlugin {
  readonly name = 'vuetify-plugin-toolbar-table-btn'
  toolbarItemMap: ToolbarItemMap

  constructor() {
    this.toolbarItemMap = {
      table: {
        vnode: () => {
          return h(TableButton)
        }
      }
    }
  }
}

export default function toolbarTableBtn() {
  return new ToolbarTableBtnPlugin()
}