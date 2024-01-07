import type { Plugin } from '../core/types'

class AutoHeightPlugin implements Plugin {
  name: string = 'core-plugin-auto-height'
  css: string

  constructor() {
    this.css = `
      &root {
        height: auto;
        align-items: flex-start;
      }
      &body {
        height: auto;
        overflow: visible !important;
      }
      &edit-container,
      &viewer-container {
        height: auto !important;
      }
    `
  }
}

function autoHeight() {
  return new AutoHeightPlugin()
}

export default autoHeight