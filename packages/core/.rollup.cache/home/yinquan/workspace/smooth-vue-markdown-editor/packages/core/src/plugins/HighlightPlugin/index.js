import { CustomCodeBlockRendererPlugin } from "../CustomCodeBlockRendererPlugin";
import HighlightCodeBlock from "./HighlightCodeBlock.vue";
import { languages } from "@codemirror/language-data";
class HighlightPlugin extends CustomCodeBlockRendererPlugin {
    cmMarkdownConfig;
    constructor(config) {
        super({
            default: [HighlightCodeBlock, config]
        });
        this.cmMarkdownConfig = {
            languages
        };
    }
}
export default function highlight(config) {
    return new HighlightPlugin(config);
}
//# sourceMappingURL=index.js.map