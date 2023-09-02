import { h } from 'vue'
import type { ToolbarItemMap, VuetifyPlugin } from '@smooth-vue-markdown-editor/vuetify'
import TableButton from './TableButton.vue'

class ToolbarTableBtnPlugin implements VuetifyPlugin {
  readonly name = 'ToolbarTableBtnPlugin'
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

export default function toolbarTableBtnPlugin() {
  return new ToolbarTableBtnPlugin()
}