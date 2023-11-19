/**
 * load a codemirror extension.
 */
class CodeMirrorExtensionPlugin {
    name = 'core-plugin-codemirror-extension';
    cmExtensions;
    constructor(ext) {
        this.cmExtensions = [ext];
    }
}
function codemirrorExt(ext) {
    return new CodeMirrorExtensionPlugin(ext);
}
export default codemirrorExt;
