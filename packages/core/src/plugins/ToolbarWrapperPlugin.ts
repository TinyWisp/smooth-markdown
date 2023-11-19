import type { CorePlugin, Wrapper } from '../core/types'

class ToolbarWrapperPlugin implements CorePlugin {
  name: string = 'core-plugin-toolbar-wrapper'
  toolbarWrapper: Wrapper

  constructor(comp: Wrapper) {
    this.toolbarWrapper = comp
  }
}

function toolbarWrapper(wrapper: Wrapper) {
  return new ToolbarWrapperPlugin(wrapper)
}

export default toolbarWrapper