import type { MditInitOptions } from '../core/types'

/**
 * set markdown-it's initialization options
 * @param options 
 * @returns 
 */
function markdownItOptionsPlugin(options: MditInitOptions) {
  return {
    name: 'core-plugin-markdown-it-options',
    mditInitOptions: options
  }
}

export default markdownItOptionsPlugin