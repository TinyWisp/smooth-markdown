import { h } from 'vue'
import type { ToolbarItemMap } from '@/VuetifyMarkdownEditor/types'
import type { VuetifyPlugin } from '../VuetifyPlugin'
import TableButton from './TableButton.vue'

class ToolbarTableBtnPlugin implements VuetifyPlugin {
  readonly name = 'ToolbarTableBtnPlugin'
  toolbarItemMap: ToolbarItemMap

  constructor() {
    this.toolbarItemMap = {
      table: {
        render: () => {
          return h(TableButton)
        }
      }
    }
  }
}

export default function toolbarTableBtnPlugin() {
  return new ToolbarTableBtnPlugin()
}