import type { MditLoadPlugin, MditTokenAttrMap } from '../CoreEditor/types';
import type { CorePlugin } from './CorePlugin';
export declare type FnCustomLinkAttrs = (oldAttrMap: MditTokenAttrMap) => MditTokenAttrMap;
/**
 * customize a link's attributes, like src, title, referer and so on.
 */
declare class CustomLinkAttrsPlugin implements CorePlugin {
    mditLoadPlugins: MditLoadPlugin[];
    constructor(fnCustomLinkAttrs: FnCustomLinkAttrs);
    mditCustomLinkAttrs(md: any, configs: any): void;
}
declare function customLinkAttrs(fnCustomLinkAttrs: FnCustomLinkAttrs): CustomLinkAttrsPlugin;
export default customLinkAttrs;
