import type { Plugin, Wrapper } from '../core/types'

class ToolbarWrapperPlugin implements Plugin {
  name: string = 'toolbar-wrapper'
  toolbarWrapper: Wrapper

  constructor(comp: Wrapper) {
    this.toolbarWrapper = comp
  }
}

function toolbarWrapper(wrapper: Wrapper) {
  return new ToolbarWrapperPlugin(wrapper)
}

export default toolbarWrapper