import type { Plugin } from '../core/types'

class AutoHeightPlugin implements Plugin {
  name: string = 'core-plugin-auto-height'
  css: string

  constructor() {
    this.css = `
      &.svme-container {
        height: auto;
        align-items: flex-start;
      }
      & .svme-body {
        height: auto;
        overflow: visible;
        align-items: flex-start;
      }
      & .svme-body-edit-wrapper,
      & .svme-body-view-wrapper {
        height: auto !important;
        overflow: visible !important;
      }
    `
  }

  init() {

  }
}

function autoHeight() {
  return new AutoHeightPlugin()
}

export default autoHeight