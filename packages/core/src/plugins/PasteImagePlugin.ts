import type { Plugin, Context, CmPasteEventHandlerMap, FnUpload } from '../core/types'

/**
 * upload the image from clipboard and insert it into the editor
 */
class PasteImagePlugin implements Plugin {
  name: string = 'core-plugin-paste-image'
  cmPasteEventHandlerMap: CmPasteEventHandlerMap
  getContext?: () => Context

  /**
   * @param fnUpload : the upload function
   */
  constructor(fnUpload: FnUpload) {
    this.cmPasteEventHandlerMap = {
      'image/*': async (item: DataTransferItem) => {
        const file = item.getAsFile();
        if (file) {
          const url = await fnUpload(file)
          this.insertImage(url)
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
    const getContext = this?.getContext
    if (!getContext) {
      console.error('PasteImagePlugin Error: cannot access the getContext() method')
      return
    }
    const context = getContext()
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