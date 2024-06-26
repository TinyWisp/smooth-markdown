import type { Plugin } from '../core/types'
import { addParentSelector } from '../utils/util'


function customViewerTheme(css: string): Plugin {
  return {
    name: 'custom-viewer-theme',
    css: addParentSelector(css, '&viewer')
  }
}

export default customViewerTheme