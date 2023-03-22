import type { CmDomEventHandlerMap, MditCodeRendererMap, MditRendererRuleMap, CommandMap } from "@/CoreEditor/types"

export interface CorePlugin {
  readonly name: string

  // markdown-it
  mditPlugins?: Function[]
  mditCodeRendererMap?: MditCodeRendererMap
  mditRendererRuleMap?: MditRendererRuleMap
  mditBeforeRender?: () => void
  mditAfterRender?: () => void

  // codemirror
  cmDomEventHandlerMap?: CmDomEventHandlerMap
  cmExtensions?: object[]

  // lifecycle
  mounted?: () => void
  beforeDestroy?: () => void

  // others
  commandMap?: CommandMap
}

export class CorePluginManager {
  plugins: CorePlugin[]

  constructor() {
    this.plugins = []
  }

  registerPlugins(plugins: CorePlugin[]) {
    plugins.forEach((plugin) => {
      this.registerPlugin(plugin)
    })
  }

  registerPlugin(plugin: CorePlugin): void {
    if (plugin.name.trim() === '') {
      console.log('a plugin without name is invalid')
    }

    this.plugins.push(plugin)
  }

  unregisterPlugin(name: string): void {
    this.plugins = this.plugins.filter((plugin) => {
      return plugin.name !== name
    })
  }

  mditBeforeRender(): void {
    this.plugins.forEach((plugin) => {
      plugin?.mditBeforeRender?.()
    })
  }

  mditAfterRender(): void {
    this.plugins.forEach((plugin) => {
      plugin?.mditAfterRender?.()
    })
  }

  getMditCodeRendererMap(): MditCodeRendererMap {
    const codeRendererMap: MditCodeRendererMap = {}
    this.plugins.forEach((plugin) => {
      if (plugin.mditCodeRendererMap) {
        Object.assign(codeRendererMap, plugin.mditCodeRendererMap)
      }
    })

    return codeRendererMap
  }

  getMditRendererRuleMap(): MditRendererRuleMap {
    const rendererRuleMap: MditRendererRuleMap = {}
    this.plugins.forEach((plugin) => {
      if (plugin.mditRendererRuleMap) {
        Object.assign(rendererRuleMap, plugin.mditRendererRuleMap)
      }
    })

    return rendererRuleMap
  }

  getCmDomEventHandlerMap(): CmDomEventHandlerMap {
    const cmDomEventHandlerMap: CmDomEventHandlerMap = {}
    this.plugins.forEach((plugin) => {
      if (plugin.cmDomEventHandlerMap) {
        Object.assign(cmDomEventHandlerMap, plugin.cmDomEventHandlerMap)
      }
    })

    return cmDomEventHandlerMap
  }

  getCommandMap(): CommandMap {
    const commandMap: CommandMap = {}
    this.plugins.forEach((plugin) => {
      if (plugin.commandMap) {
        Object.assign(commandMap, plugin.commandMap)
      }
    })

    return commandMap
  }
}