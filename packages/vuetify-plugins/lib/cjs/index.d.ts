import { VuetifyPlugin, ToolbarItemMap } from '@smooth-vue-markdown-editor/vuetify';

type FnUpload = (file: File) => (string | Promise<string>);

declare class ToolbarImageBtnPlugin implements VuetifyPlugin {
    readonly name = "vuetify-plugin-toolbar-image-btn";
    fnUploadImage: FnUpload;
    toolbarItemMap: ToolbarItemMap;
    constructor(fnUploadImage: FnUpload);
}
declare function toolbarImageBtn(fnUploadImage: FnUpload): ToolbarImageBtnPlugin;

declare class ToolbarLinkBtnPlugin implements VuetifyPlugin {
    readonly name = "vuetify-plugin-toolbar-link-btn";
    toolbarItemMap: ToolbarItemMap;
    constructor();
}
declare function toolbarLinkBtn(): ToolbarLinkBtnPlugin;

declare class ToolbarTableBtnPlugin implements VuetifyPlugin {
    readonly name = "vuetify-plugin-toolbar-table-btn";
    toolbarItemMap: ToolbarItemMap;
    constructor();
}
declare function toolbarTableBtn(): ToolbarTableBtnPlugin;

export { toolbarImageBtn, toolbarLinkBtn, toolbarTableBtn };
