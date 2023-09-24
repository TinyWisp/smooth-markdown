import type { CorePlugin, MessageMap } from '@smooth-vue-markdown-editor/core'
import type { ToolbarItemMap, VuetifyContext } from './VuetifyMarkdownEditor/types'
import { merge } from 'lodash/merge'

interface VuetifyPlugin {
  name: string
  toolbarItemMap?: ToolbarItemMap
  corePlugins?: CorePlugin[]
  messageMap?: MessageMap
  getVuetifyContext?: () => VuetifyContext
}

class VuetifyPluginManager {
  plugins: VuetifyPlugin[]
  getVuetifyContext: () => VuetifyContext

  constructor(getVuetifyContext: () => VuetifyContext) {
    this.plugins = []
    this.getVuetifyContext = getVuetifyContext
  }

  registerPlugins(plugins:  (VuetifyPlugin | CorePlugin)[]) {
    plugins.forEach((plugin) => {
      this.registerPlugin(plugin)
    })
  }

  registerPlugin(plugin: VuetifyPlugin | CorePlugin): void {
    if (plugin.name.indexOf('core-plugin-') === 0) {
      this.plugins.push(corePluginWrapper(plugin))
      return
    }

    if (plugin.name.indexOf('vuetify-plugin-') !== 0) {
      console.error('a valid plugin has a name that begins with "vuetify-plugin-"')
      return
    }

    (plugin as VuetifyPlugin).getVuetifyContext = this.getVuetifyContext

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

  getMessageMap(): MessageMap {
    let messageMap: MessageMap = {}
    this.plugins.forEach((plugin) => {
      if (plugin?.messageMap) {
        messageMap = merge(messageMap, plugin.messageMap)
      }
    })

    return messageMap
  }
}

class CorePluginWrapper implements VuetifyPlugin {
  name: string
  corePlugins: CorePlugin[]

  constructor(plugin: CorePlugin) {
    this.name = `core-plugin-wrapper-${plugin.name}`
    this.corePlugins = [plugin]
  }
}

function corePluginWrapper(plugin: CorePlugin) {
  return new CorePluginWrapper(plugin)
}


export { VuetifyPluginManager, corePluginWrapper }
export type { VuetifyPlugin }