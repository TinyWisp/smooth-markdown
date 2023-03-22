import type { CorePlugin } from '@smooth-vue-markdown-editor/core'
import type { ToolbarItemMap } from '@/VuetifyMarkdownEditor/types'

interface VuetifyPlugin {
  name: string
  toolbarItemMap?: ToolbarItemMap
  corePlugins?: CorePlugin[]
}

class VuetifyPluginManager {
  plugins: VuetifyPlugin[]

  constructor() {
    this.plugins = []
  }

  registerPlugins(plugins:  VuetifyPlugin[]) {
    plugins.forEach((plugin) => {
      this.registerPlugin(plugin)
    })
  }

  registerPlugin(plugin: VuetifyPlugin): void {
    if (plugin.name.trim() === '') {
      console.error('a plugin without name is invalid')
      return
    }

    this.plugins.push(plugin)
  }

  unregisterPlugin(name: string): void {
    this.plugins = this.plugins.filter((plugin) => {
      return plugin.name !== name
    })
  }

  getCorePlugins() {
    const corePlugins: CorePlugin[] = []
    this.plugins.forEach((vplugin) => {
      if (vplugin.corePlugins) {
        corePlugins.push(...vplugin.corePlugins)
      }
    })

    return corePlugins
  }

  getToolbarItemMap(): ToolbarItemMap {
    const toolbarItemMap: ToolbarItemMap = {}
    this.plugins.forEach((plugin) => {
      if (plugin?.toolbarItemMap) {
        Object.assign(toolbarItemMap, plugin.toolbarItemMap)
      }
    })

    return toolbarItemMap
  }
}

class CorePluginWrapper implements VuetifyPlugin {
  name: string
  corePlugins: CorePlugin[]

  constructor(plugin: CorePlugin) {
    this.name = `CorePluginWraper-${plugin.name}`
    this.corePlugins = [plugin]
  }
}

function corePluginWrapper(plugin: CorePlugin) {
  return new CorePluginWrapper(plugin)
}


export { VuetifyPluginManager }
export type { VuetifyPlugin }