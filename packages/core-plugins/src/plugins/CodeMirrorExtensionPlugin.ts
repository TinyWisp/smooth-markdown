import type { CorePlugin } from "@smooth-vue-markdown-editor/core"
import type { Extension as CmExtension } from "@codemirror/state"

/**
 * load a codemirror extension.
 */
class CodeMirrorExtensionPlugin implements CorePlugin {
  name: string = 'core-plugin-codemirror-extension'
  cmExtensions : CmExtension[]

  constructor(ext: CmExtension) {
    this.cmExtensions = [ext]
  }
}

function codemirrorExt(ext: CmExtension) {
  return new CodeMirrorExtensionPlugin(ext)
}

export default codemirrorExt
