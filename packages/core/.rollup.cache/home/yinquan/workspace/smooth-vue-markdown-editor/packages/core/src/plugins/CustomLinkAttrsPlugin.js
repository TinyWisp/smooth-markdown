/**
 * customize a link's attributes, like src, title, referer and so on.
 */
class CustomLinkAttrsPlugin {
    mditLoadPlugins;
    constructor(fnCustomLinkAttrs) {
        this.mditLoadPlugins = [];
        this.mditLoadPlugins.push([this.mditCustomLinkAttrs, {
                fnCustomLinkAttrs,
            }]);
    }
    mditCustomLinkAttrs(md, configs) {
        const orgLinkOpenRenderer = md.renderer.rules.link_open
            ? md.renderer.rules.link_open.bind(md.renderer.rules)
            : md.renderer.renderToken.bind(md.renderer);
        const fnCustomLinkAttrs = configs.fnCustomLinkAttrs;
        if (!fnCustomLinkAttrs) {
            return;
        }
        md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
            const token = tokens[idx];
            const isSimpleLink = tokens?.[idx + 1]?.type === 'text' && tokens?.[idx + 2]?.type === 'link_close';
            const oldAttrs = token.attrs;
            const oldAttrMap = {};
            oldAttrs.forEach((attr) => {
                const key = attr[0];
                const val = attr[1];
                oldAttrMap[key] = val;
            });
            if (isSimpleLink) {
                oldAttrMap.title = tokens[idx + 1].content;
            }
            const newAttrMap = fnCustomLinkAttrs(oldAttrMap);
            const newTitle = newAttrMap.title;
            const newAttrs = [];
            delete newAttrMap.title;
            if (newAttrMap) {
                for (const key in newAttrMap) {
                    newAttrs.push([key, newAttrMap[key]]);
                }
            }
            tokens[idx]['attrs'] = newAttrs;
            if (isSimpleLink && newTitle && newTitle !== oldAttrMap.title) {
                tokens[idx + 1].content = newTitle;
            }
            return orgLinkOpenRenderer(tokens, idx, options, env, self);
        };
    }
}
function customLinkAttrs(fnCustomLinkAttrs) {
    return new CustomLinkAttrsPlugin(fnCustomLinkAttrs);
}
export default customLinkAttrs;
//# sourceMappingURL=CustomLinkAttrsPlugin.js.map