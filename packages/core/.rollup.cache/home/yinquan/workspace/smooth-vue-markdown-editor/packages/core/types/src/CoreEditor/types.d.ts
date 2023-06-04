import type { Ref } from 'vue';
import type { PluginSimple as MditPluginSimple, PluginWithOptions as MditPluginWithOptions, PluginWithParams as MditPluginWithParams } from 'markdown-it';
export declare type MditCodeRenderer = (code: string, lang: string) => string;
export interface MditCodeRendererMap {
    [key: string]: MditCodeRenderer;
}
export declare type MditRendererRule = (tokens: any[], idx: number, options?: object, env?: object, slf?: object) => string;
export interface MditRendererRuleMap {
    [key: string]: MditRendererRule;
}
export declare type MditPlugin = MditPluginSimple | MditPluginWithOptions | MditPluginWithParams;
export declare type MditLoadPlugin = [MditPlugin, object] | [MditPlugin];
export interface MditInitOptions {
    [key: string]: any;
}
export declare type MditTokenAttr = [string, string];
export declare type MditTokenAttrs = MditTokenAttr[];
export declare type MditTokenAttrMap = {
    [key: string]: string;
};
export declare type CmDomEventHandlerMap = {
    [key: string]: (event: Event) => void;
};
export declare type CmDocChanged = (doc: string) => void;
export interface CoreContext {
    methods: {
        [key: string]: Function;
    };
    doms: {
        [key: string]: Ref<HTMLElement | null>;
    };
    props: {
        [key: string]: any;
    };
}
export declare type Command = (cmd: string, params: object) => void;
export interface CommandMap {
    [key: string]: Command;
}
export declare type FnUpload = (file: File) => string | Promise<string>;
