import type { MditCodeRendererMap } from '../CoreEditor/types';
import type { CorePlugin } from './CorePlugin';
import type { Component, Ref, UnwrapNestedRefs, VNode } from 'vue';
export interface LangComponentMap {
    [lang: string]: [Component, object?];
}
export interface CodeBlock {
    id: string;
    lang: string;
    code: string;
}
/**
 * render a code block using a user defined component
 */
declare class CustomCodeBlockRendererPlugin implements CorePlugin {
    mditCodeRendererMap: MditCodeRendererMap;
    langComponentMap: LangComponentMap;
    codeBlocks: CodeBlock[];
    extraVnodes: UnwrapNestedRefs<VNode[]>;
    disableTeleport: Ref<boolean>;
    constructor(langComponentMap: LangComponentMap);
    mditBeforeRender(): void;
    mditCodeRenderer(code: string, lang: string): string;
    mditAfterRender(): void;
    renderCodeBlockComponent(codeblock: CodeBlock): VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}
declare function customCodeBlockRenderer(langComponentMap: LangComponentMap): CorePlugin;
export default customCodeBlockRenderer;
export { CustomCodeBlockRendererPlugin };
