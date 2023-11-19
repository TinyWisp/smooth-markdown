import codemirrorExt from "./CodeMirrorExtensionPlugin"
import { lineNumbers } from '@codemirror/view'

function showLineNumbers() {
  return codemirrorExt(lineNumbers())
}

export default showLineNumbers