import type { MditRendererRuleMap } from '../CoreEditor/types';
import type { CorePlugin } from './CorePlugin';
export interface ImageData {
    src: string;
    alt: string;
    title: string;
    id: string;
}
export declare type ImageClickEventHandler = (images: ImageData[], idx: number, event: Event) => void;
/**
 * execute an user defined function, when the user clicks an image in the view.
 */
declare class HandleImageClickPlugin implements CorePlugin {
    images: ImageData[];
    mditRendererRuleMap: MditRendererRuleMap;
    fnImageClick: ImageClickEventHandler;
    constructor(fnImageClick: ImageClickEventHandler);
    mditBeforeRender(): void;
    imageRenderer(tokens: any[], idx: number): string;
}
declare function handleImageClickPlugin(fnImageClick: ImageClickEventHandler): HandleImageClickPlugin;
export default handleImageClickPlugin;
