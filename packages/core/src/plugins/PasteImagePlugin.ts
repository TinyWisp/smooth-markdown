import type { CoreContext, CmDomEventHandlerMap, FnUpload } from '@/CoreEditor/types'
import type { CorePlugin } from './CorePlugin'
import { inject } from 'vue' 

class PasteImagePlugin implements CorePlugin {
  name: string = 'PasteImagePlugin'
  cmDomEventHandlerMap: CmDomEventHandlerMap

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

  insertImage (url: string) {
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