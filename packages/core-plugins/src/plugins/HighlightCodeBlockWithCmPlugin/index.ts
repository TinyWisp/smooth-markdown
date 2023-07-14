import { CustomCodeBlockRendererPlugin } from "../CustomCodeBlockRendererPlugin"
import HighlightCodeBlock from "./HighlightCodeBlock.vue"
import type { Extension } from "@codemirror/state"

export interface HighlightCodeBlockWithCmPluginConfig {
  theme?: Extension
}

export default function highlightCodeBlockWithCm(config?: HighlightCodeBlockWithCmPluginConfig) {
  return new CustomCodeBlockRendererPlugin({
      default: [HighlightCodeBlock, config]
  })
}