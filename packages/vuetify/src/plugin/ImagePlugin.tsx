import type { VNode, Ref } from 'vue'
import { ref } from 'vue'
import { mdiImage } from '@mdi/js'
import InsertNetworkImageDialog from './InsertNetworkImageDialog.vue'

interface ToolbarItem {
  name?: string
  icon?: string | (() => string)
  tip?: string | (() => string)
  cmd?: string
  exec?: () => void
  custom?: () => VNode
}

interface ToolbarItemMap {
  [key: string]: ToolbarItem
}

class ImagePlugin {
  toolbarButtonMap: ToolbarItemMap
  networkImageDialog: {
    show: Ref<boolean>
    url: string
    title: string
  }

  constructor() {
    this.networkImageDialog = {
      show: ref(false),
      url: '',
      title: '',
    }
    this.toolbarButtonMap = {
      image: {
        custom: () => {
          return (
            <v-btn
              size="small"
              variant="flat"
              color="white"
              class="svme-toolbar-button"
              v-else>
              <v-icon small color="grey darken-1" icon={mdiImage}></v-icon>
              <v-tooltip location="bottom" activator="parent">Image</v-tooltip>
              <insert-network-image-dialog
                modelValue={this.networkImageDialog.show.value}
                url={this.networkImageDialog.url}
                onOk={this.insertNetworkImage()}
              ></insert-network-image-dialog>
              <v-menu offset-y={true} open-on-hover bottom activator="parent">
                <v-list>
                  <v-list-item onClick={() => {this.showNetworkImageDialog()}}>
                    <v-list-item-title>Insert Network Image</v-list-item-title>
                  </v-list-item>
                  <v-list-item onClick={() => {this.uploadImage()}}>
                    <v-list-item-title>Upload local Image</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-btn>
          )
        }
      }
    }
  }

  insertNetworkImage() {
    console.log('-----insert-network-image----')
  }

  showNetworkImageDialog() {
    console.log('---show-network-image-dialog--')
    this.networkImageDialog.show.value = true
  }

  uploadImage() {
    console.log('---upload image---')
  }
}

export default ImagePlugin