import { h } from 'vue'
import type { ToolbarItemMap } from '@/VuetifyMarkdownEditor/types'
import type { VuetifyPlugin } from '../VuetifyPlugin'
import type { FnUpload } from './types'
import ImageButton from './ImageButton.vue'

class ToolbarImageBtnPlugin implements VuetifyPlugin {
  readonly name = 'ToolbarImageBtnPlugin'
  fnUploadImage: FnUpload
  toolbarItemMap: ToolbarItemMap

  constructor(fnUploadImage: FnUpload) {
    this.fnUploadImage = fnUploadImage
    this.toolbarItemMap = {
      image: {
        render: () => {
          return h(ImageButton, {
            fnUploadImage
          })
        }
      }
    }
  }
}

export default function toolbarImageBtn(fnUploadImage: FnUpload) {
  return new ToolbarImageBtnPlugin(fnUploadImage)
}