import type { Plugin, MditLoadPlugin } from '../core/types'

/**
 * load markdown-it plugins
 * @param plugins 
 * @returns 
 */
function markdownItPlugins(plugins: MditLoadPlugin[]): Plugin {
  return {
    name: 'core-plugin-markdownit-plugins',
    mditLoadPlugins: [...plugins]
  }
}

export default markdownItPlugins