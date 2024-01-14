import type { Plugin, Context, CmPasteEventHandlerMap, FnUpload, FnGetContext } from '../core/types'

/**
 * upload the image from clipboard and insert it into the editor
 */
class PasteImagePlugin implements Plugin {
  name: string = 'core-plugin-paste-image'
  cmPasteEventHandlerMap: CmPasteEventHandlerMap
  getContext?: FnGetContext

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

  init(getContext: FnGetContext) {
    this.getContext = getContext
  }

  /**
   * insert an image into the editor
   * @param url 
   * @returns 
   */
  private insertImage (url: string): void {
    const context = (this.getContext!)()
    context.editor.command('image', {
      url,
      title: '',
    })
  }
}

function pasteImage(fnUpload: FnUpload): PasteImagePlugin {
  return new PasteImagePlugin(fnUpload)
}

export default pasteImage 