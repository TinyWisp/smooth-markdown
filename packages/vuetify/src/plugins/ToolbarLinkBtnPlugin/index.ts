import { h } from 'vue'
import type { ToolbarItemMap } from '@/VuetifyMarkdownEditor/types'
import type { VuetifyPlugin } from '../VuetifyPlugin'
import LinkButton from './LinkButton.vue'

class ToolbarLinkBtnPlugin implements VuetifyPlugin {
  readonly name = 'ToolbarLinkBtnPlugin'
  toolbarItemMap: ToolbarItemMap

  constructor() {
    this.toolbarItemMap = {
      link: {
        render: () => {
          return h(LinkButton)
        }
      }
    }
  }
}

export default function toolbarLinkBtnPlugin() {
  return new ToolbarLinkBtnPlugin()
}