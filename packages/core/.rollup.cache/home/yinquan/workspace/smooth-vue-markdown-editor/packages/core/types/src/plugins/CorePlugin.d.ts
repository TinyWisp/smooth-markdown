import type { CmDomEventHandlerMap, CmDocChanged, MditCodeRendererMap, MditRendererRuleMap, CommandMap, MditLoadPlugin, MditInitOptions } from "../CoreEditor/types";
import type { Extension as CmExtension } from '@codemirror/state';
import type { VNode, UnwrapNestedRefs } from 'vue';
/**
 * prefix 'mdit' indicates that the function/property is related to markdown-it
 * prefix 'cm' indicates that the function/property is related to codemirror
 */
export interface CorePlugin {
    mditInitOptions?: MditInitOptions;
    mditLoadPlugins?: MditLoadPlugin[];
    mditCodeRendererMap?: MditCodeRendererMap;
    mditRendererRuleMap?: MditRendererRuleMap;
    mditBeforeRender?: () => void;
    mditAfterRender?: () => void;
    cmDomEventHandlerMap?: CmDomEventHandlerMap;
    cmExtensions?: CmExtension[];
    cmDocChanged?: CmDocChanged;
    cmMarkdownConfig?: object;
    mounted?: () => void;
    beforeDestroy?: () => void;
    commandMap?: CommandMap;
    extraVnodes?: VNode[];
}
export declare class CorePluginManager {
    plugins: CorePlugin[];
    constructor();
    registerPlugins(plugins: CorePlugin[]): void;
    registerPlugin(plugin: CorePlugin): void;
    mditBeforeRender(): void;
    mditAfterRender(): void;
    getMditCodeRendererMap(): MditCodeRendererMap;
    getMditRendererRuleMap(): MditRendererRuleMap;
    getMditInitOptions(): MditInitOptions;
    getMditLoadPlugins(): MditLoadPlugin[];
    getCmDomEventHandlerMap(): CmDomEventHandlerMap;
    getCmExtensions(): CmExtension[];
    getCmMarkdownConfig(): object;
    cmDocChanged(doc: string): void;
    getCommandMap(): CommandMap;
    getExtraVnodes(): UnwrapNestedRefs<VNode[]>;
}
