import type { CorePlugin, CoreContext, CmPasteEventHandlerMap, FnUpload } from '@smooth-vue-markdown-editor/core'
import { inject } from 'vue' 
import type { TransferListItem } from 'worker_threads'

/**
 * upload the image from clipboard and insert it into the editor
 */
class PasteImagePlugin implements CorePlugin {
  cmPasteEventHandlerMap: CmPasteEventHandlerMap

  /**
   * @param fnUpload : the upload function
   */
  constructor(fnUpload: FnUpload) {
    this.cmPasteEventHandlerMap = {
      'image/*': async (item: DataTransferItem) => {
        if (item.type.indexOf('image') >= 0) {
          const file = item.getAsFile();
          if (file) {
            const url = await fnUpload(file)
            this.insertImage(url)
          }
        }
      }
    }
  }

  /**
   * insert an image into the editor
   * @param url 
   * @returns 
   */
  private insertImage (url: string): void {
    const getCoreContext = inject<() => CoreContext>('getCoreContext')
    if (!getCoreContext) {
      console.error('PasteImagePlugin Error: cannot access the getCoreContext() method')
      return
    }
    const context = getCoreContext()
    context.methods.command('image', {
      url,
      title: '',
    })
  }
}

function pasteImage(fnUpload: FnUpload): PasteImagePlugin {
  return new PasteImagePlugin(fnUpload)
}

export default pasteImage 