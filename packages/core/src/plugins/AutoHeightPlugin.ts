import type { Plugin } from '../core/types'

class AutoHeightPlugin implements Plugin {
  name: string = 'core-plugin-auto-height'
  css: string

  constructor() {
    this.css = `
      &.svme-root {
        height: auto;
        align-items: flex-start;
      }
      & > .svme-body {
        height: auto;
        overflow: visible !important;
      }
      & > .svme-body > .svme-edit-container,
      & > .svme-body > .svme-view-container {
        height: auto !important;
        overflow: visible !important;
      }
    `
  }
}

function autoHeight() {
  return new AutoHeightPlugin()
}

export default autoHeight