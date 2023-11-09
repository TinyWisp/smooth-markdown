import type { CorePlugin, MditLoadPlugin } from "@smooth-vue-markdown-editor/core"

/**
 * load a markdown-it plugin.
 */
class MarkdownItPluginPlugin implements CorePlugin {
  name: string = 'core-plugin-markdownit-plugin'
  mditLoadPlugins: MditLoadPlugin[]

  constructor(plugin: MditLoadPlugin) {
    this.mditLoadPlugins = [plugin]
  }
}

function markdownItPlugin(plugin: MditLoadPlugin) {
  return new MarkdownItPluginPlugin(plugin)
}

export default markdownItPlugin