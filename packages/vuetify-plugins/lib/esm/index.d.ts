import { VuetifyPlugin, ToolbarItemMap } from '@smooth-vue-markdown-editor/vuetify';

type FnUpload = (file: File) => (string | Promise<string>);

declare class ToolbarImageBtnPlugin implements VuetifyPlugin {
    readonly name = "ToolbarImageBtnPlugin";
    fnUploadImage: FnUpload;
    toolbarItemMap: ToolbarItemMap;
    constructor(fnUploadImage: FnUpload);
}
declare function toolbarImageBtn(fnUploadImage: FnUpload): ToolbarImageBtnPlugin;

declare class ToolbarLinkBtnPlugin implements VuetifyPlugin {
    readonly name = "ToolbarLinkBtnPlugin";
    toolbarItemMap: ToolbarItemMap;
    constructor();
}
declare function toolbarLinkBtnPlugin(): ToolbarLinkBtnPlugin;

declare class ToolbarTableBtnPlugin implements VuetifyPlugin {
    readonly name = "ToolbarTableBtnPlugin";
    toolbarItemMap: ToolbarItemMap;
    constructor();
}
declare function toolbarTableBtnPlugin(): ToolbarTableBtnPlugin;

export { toolbarImageBtn, toolbarLinkBtnPlugin, toolbarTableBtnPlugin };
