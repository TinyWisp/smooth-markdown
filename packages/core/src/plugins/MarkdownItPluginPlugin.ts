import type { Plugin, MditLoadPlugin } from '../core/types'

/**
 * load a markdown-it plugin
 * @param plugins 
 * @returns 
 */
function markdownItPlugin(plugin: MditLoadPlugin): Plugin {
  return {
    name: 'core-plugin-markdownit-plugins',
    mditLoadPlugins: [plugin]
  }
}

export default markdownItPlugin