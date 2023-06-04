import { reactive } from 'vue';
export class CorePluginManager {
    plugins;
    constructor() {
        this.plugins = [];
    }
    /**
     * register plugins
     * @param plugins
     */
    registerPlugins(plugins) {
        plugins.forEach((plugin) => {
            this.registerPlugin(plugin);
        });
    }
    /**
     * register a plugin
     * @param plugin
     */
    registerPlugin(plugin) {
        this.plugins.push(plugin);
    }
    mditBeforeRender() {
        this.plugins.forEach((plugin) => {
            plugin.mditBeforeRender && plugin.mditBeforeRender.apply(plugin);
        });
    }
    /**
     * execute every plugin's midtAfterRender method
     */
    mditAfterRender() {
        this.plugins.forEach((plugin) => {
            plugin.mditAfterRender && plugin.mditAfterRender.apply(plugin);
        });
    }
    /**
     * get the merged map of all plugin's midtCodeRendererMap property
     * @returns
     */
    getMditCodeRendererMap() {
        const codeRendererMap = {};
        this.plugins.forEach((plugin) => {
            if (plugin.mditCodeRendererMap) {
                for (const lang of Object.keys(plugin.mditCodeRendererMap)) {
                    codeRendererMap[lang] = plugin.mditCodeRendererMap[lang].bind(plugin);
                }
            }
        });
        return codeRendererMap;
    }
    getMditRendererRuleMap() {
        const rendererRuleMap = {};
        this.plugins.forEach((plugin) => {
            if (plugin.mditRendererRuleMap) {
                Object.assign(rendererRuleMap, plugin.mditRendererRuleMap);
            }
        });
        return rendererRuleMap;
    }
    getMditInitOptions() {
        const options = {};
        this.plugins.forEach((plugin) => {
            if (plugin.mditInitOptions) {
                Object.assign(options, plugin.mditInitOptions);
            }
        });
        return options;
    }
    getMditLoadPlugins() {
        const loadPlugins = [];
        this.plugins.forEach((plugin) => {
            if (plugin.mditLoadPlugins) {
                plugin.mditLoadPlugins.forEach((loadPlugin) => {
                    loadPlugins.push(loadPlugin);
                });
            }
        });
        return loadPlugins;
    }
    getCmDomEventHandlerMap() {
        const cmDomEventHandlerMap = {};
        this.plugins.forEach((plugin) => {
            if (plugin.cmDomEventHandlerMap) {
                Object.assign(cmDomEventHandlerMap, plugin.cmDomEventHandlerMap);
            }
        });
        return cmDomEventHandlerMap;
    }
    getCmExtensions() {
        const exts = [];
        this.plugins.forEach((plugin) => {
            if (plugin.cmExtensions) {
                exts.splice(exts.length - 1, 0, plugin.cmExtensions);
            }
        });
        return exts;
    }
    getCmMarkdownConfig() {
        const config = {};
        this.plugins.forEach((plugin) => {
            if (plugin.cmMarkdownConfig) {
                Object.assign(config, plugin.cmMarkdownConfig);
            }
        });
        return config;
    }
    cmDocChanged(doc) {
        this.plugins.forEach((plugin) => {
            plugin?.cmDocChanged?.(doc);
        });
    }
    getCommandMap() {
        const commandMap = {};
        this.plugins.forEach((plugin) => {
            if (plugin.commandMap) {
                Object.assign(commandMap, plugin.commandMap);
            }
        });
        return commandMap;
    }
    getExtraVnodes() {
        const vnodes = [];
        this.plugins.forEach((plugin) => {
            if (plugin.extraVnodes) {
                plugin.extraVnodes.forEach((vnode) => {
                    vnodes.push(vnode);
                });
            }
        });
        return reactive(vnodes);
    }
}
//# sourceMappingURL=CorePlugin.js.map