import { uniqId } from '../utils/util';
import { nextTick, ref, reactive, Teleport, h } from 'vue';
/**
 * render a code block using a user defined component
 */
class CustomCodeBlockRendererPlugin {
    mditCodeRendererMap;
    langComponentMap;
    codeBlocks;
    extraVnodes;
    disableTeleport;
    constructor(langComponentMap) {
        this.langComponentMap = langComponentMap;
        this.codeBlocks = [];
        this.extraVnodes = reactive([]);
        this.disableTeleport = ref(true);
        const langs = Object.keys(langComponentMap);
        this.mditCodeRendererMap = {};
        langs.forEach((lang) => {
            this.mditCodeRendererMap[lang] = this.mditCodeRenderer;
        });
    }
    mditBeforeRender() {
        this.codeBlocks = [];
    }
    mditCodeRenderer(code, lang) {
        const id = uniqId();
        this.codeBlocks.push({
            lang,
            code,
            id,
        });
        return `<pre id="${id}"></pre>`;
    }
    mditAfterRender() {
        nextTick(() => {
            if (this.codeBlocks.length === 0 || !document.getElementById(this.codeBlocks[0].id)) {
                return;
            }
            const vnodes = [];
            this.codeBlocks.forEach((codeBlock) => {
                vnodes.push(this.renderCodeBlockComponent(codeBlock));
            });
            this.extraVnodes.splice(0, this.extraVnodes.length, ...vnodes);
        });
    }
    renderCodeBlockComponent(codeblock) {
        const [component, config] = this.langComponentMap[codeblock.lang] ?? this.langComponentMap.default;
        const renderCompoent = h(component, {
            lang: codeblock.lang,
            code: codeblock.code,
            config,
        });
        return h(Teleport, {
            to: `#${codeblock.id}`,
        }, [renderCompoent]);
    }
}
function customCodeBlockRenderer(langComponentMap) {
    return new CustomCodeBlockRendererPlugin(langComponentMap);
}
export default customCodeBlockRenderer;
export { CustomCodeBlockRendererPlugin };
//# sourceMappingURL=CustomCodeBlockRendererPlugin.js.map