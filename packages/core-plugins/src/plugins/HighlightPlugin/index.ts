import { CustomCodeBlockRendererPlugin } from "../CustomCodeBlockRendererPlugin"
import HighlightCodeBlock from "./HighlightCodeBlock.vue"
import type { Extension } from "@codemirror/state"

export interface HighlightPluginConfig {
  theme?: Extension
}

export default function highlight(config?: HighlightPluginConfig) {
  return new CustomCodeBlockRendererPlugin({
      default: [HighlightCodeBlock, config]
  })
}