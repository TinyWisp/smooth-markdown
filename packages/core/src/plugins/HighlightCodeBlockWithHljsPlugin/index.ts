import { CustomCodeBlockRendererPlugin } from "../CustomCodeBlockRendererPlugin"
import HighlightCodeBlock from "./HighlightCodeBlock.vue"

export interface HighlightCodeBlockWithHljsPluginConfig {
}

export default function highlightCodeBlockWithHljs(config?: HighlightCodeBlockWithHljsPluginConfig) {
  return new CustomCodeBlockRendererPlugin({
      default: [HighlightCodeBlock, config]
  })
}