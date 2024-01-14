import type { Plugin, MditLoadPlugin } from '../core/types'

/**
 * load a markdown-it plugin.
 */
class MarkdownItPluginPlugin implements Plugin {
  name: string = 'core-plugin-markdownit-plugin'
  mditLoadPlugins: MditLoadPlugin[]

  constructor(plugins:  MditLoadPlugin[]) {
    this.mditLoadPlugins = [...plugins]
  }
}

function markdownItPlugin(plugins: MditLoadPlugin[]) {
  return new MarkdownItPluginPlugin(plugins)
}

export default markdownItPlugin