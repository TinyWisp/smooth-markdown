import { languages } from "@codemirror/language-data"
import type { Plugin } from '../core/types'

class HighlightCodeBlocksInEditableAreaPlugin implements Plugin {
  name: string = 'core-plugin-highlight-code-block-in-editable-area'
  cmMarkdownConfig: object

  constructor() {
    this.cmMarkdownConfig = {
      codeLanguages: languages
    }
  }
}

export default function HighlightCodeBlocksInEditableArea() {
  return new HighlightCodeBlocksInEditableAreaPlugin()
}