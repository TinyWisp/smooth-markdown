import { uniqId, escapeHtml } from '../utils/util';
/**
 * execute an user defined function, when the user clicks an image in the view.
 */
class HandleImageClickPlugin {
    images;
    mditRendererRuleMap;
    fnImageClick;
    constructor(fnImageClick) {
        this.images = [];
        this.mditRendererRuleMap = {
            image: this.imageRenderer
        };
        this.fnImageClick = fnImageClick;
    }
    mditBeforeRender() {
        this.images.splice(0, this.images.length);
    }
    imageRenderer(tokens, idx) {
        const id = `image_click_event_plugin_${uniqId()}`;
        const attrs = tokens[idx].attrs;
        const attrMap = {};
        attrs.forEach((item) => {
            if (item.length >= 2) {
                const key = item[0];
                const val = item[1];
                attrMap[key] = val;
            }
        });
        const src = attrMap.src;
        const alt = tokens[idx].content;
        const title = attrMap.title ?? alt;
        const counter = this.images.length;
        this.images.push({
            src, alt, title, id
        });
        setTimeout(() => {
            const el = document.getElementById(id);
            el && el.addEventListener('click', (e) => {
                this.fnImageClick(this.images, counter, e);
            });
        }, 0);
        return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" title="${escapeHtml(title)}" id="${id}" class="svme-plugin-handle-image-click">`;
    }
}
function handleImageClickPlugin(fnImageClick) {
    return new HandleImageClickPlugin(fnImageClick);
}
export default handleImageClickPlugin;
//# sourceMappingURL=HandleImageClickPlugin.js.map