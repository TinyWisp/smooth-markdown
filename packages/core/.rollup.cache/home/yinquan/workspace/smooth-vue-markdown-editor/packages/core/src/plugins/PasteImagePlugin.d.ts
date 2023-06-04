import type { CmDomEventHandlerMap, FnUpload } from '../CoreEditor/types';
import type { CorePlugin } from './CorePlugin';
/**
 * upload the image from clipboard and insert it into the editor
 */
declare class PasteImagePlugin implements CorePlugin {
    cmDomEventHandlerMap: CmDomEventHandlerMap;
    /**
     * @param fnUpload : the upload function
     */
    constructor(fnUpload: FnUpload);
    /**
     * insert an image into the editor
     * @param url
     * @returns
     */
    private insertImage;
}
declare function pasteImage(fnUpload: FnUpload): PasteImagePlugin;
export default pasteImage;
