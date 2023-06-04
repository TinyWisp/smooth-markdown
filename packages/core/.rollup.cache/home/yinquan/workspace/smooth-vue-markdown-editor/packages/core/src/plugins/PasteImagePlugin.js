import { inject } from 'vue';
/**
 * upload the image from clipboard and insert it into the editor
 */
class PasteImagePlugin {
    cmDomEventHandlerMap;
    /**
     * @param fnUpload : the upload function
     */
    constructor(fnUpload) {
        this.cmDomEventHandlerMap = {
            paste: async (event) => {
                const cevent = event;
                if (cevent.clipboardData?.items) {
                    for (const item of cevent.clipboardData.items) {
                        if (item.type.indexOf("image") >= 0) {
                            const file = item.getAsFile();
                            if (file) {
                                const url = await fnUpload(file);
                                this.insertImage(url);
                            }
                        }
                    }
                }
            }
        };
    }
    /**
     * insert an image into the editor
     * @param url
     * @returns
     */
    insertImage(url) {
        const getCoreContext = inject('getCoreContext');
        if (!getCoreContext) {
            console.error('PasteImagePlugin Error: cannot access the getCoreContext() method');
            return;
        }
        const context = getCoreContext();
        context.methods.command('image', {
            url,
            title: '',
        });
    }
}
function pasteImage(fnUpload) {
    return new PasteImagePlugin(fnUpload);
}
export default pasteImage;
//# sourceMappingURL=PasteImagePlugin.js.map