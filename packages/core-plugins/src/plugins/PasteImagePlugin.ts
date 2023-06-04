import type { CorePlugin, CoreContext, CmDomEventHandlerMap, FnUpload } from '@smooth-vue-markdown-editor/core'
import { inject } from 'vue' 

/**
 * upload the image from clipboard and insert it into the editor
 */
class PasteImagePlugin implements CorePlugin {
  cmDomEventHandlerMap: CmDomEventHandlerMap

  /**
   * @param fnUpload : the upload function
   */
  constructor(fnUpload: FnUpload) {
    this.cmDomEventHandlerMap = {
      paste: async (event: Event) => {
        const cevent = event as ClipboardEvent
        if(cevent.clipboardData?.items) {
          for (const item of cevent.clipboardData.items) {
            if (item.type.indexOf("image") >= 0) {
              const file = item.getAsFile();
              if (file) {
                const url = await fnUpload(file)
                this.insertImage(url)
              }
            }
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