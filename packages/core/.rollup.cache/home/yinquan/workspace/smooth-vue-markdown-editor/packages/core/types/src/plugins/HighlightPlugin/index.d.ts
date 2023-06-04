import { CustomCodeBlockRendererPlugin } from "../CustomCodeBlockRendererPlugin";
import type { Extension } from "@codemirror/state";
import type { CorePlugin } from "../CorePlugin";
export interface HighlightPluginConfig {
    theme?: Extension;
}
declare class HighlightPlugin extends CustomCodeBlockRendererPlugin implements CorePlugin {
    cmMarkdownConfig: object;
    constructor(config?: HighlightPluginConfig);
}
export default function highlight(config?: HighlightPluginConfig): HighlightPlugin;
export {};
