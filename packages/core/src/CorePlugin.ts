import type { CmDomEventHandlerMap, CmDocChanged, MditCodeRendererMap, MditRendererRuleMap, CommandMap, MditLoadPlugin, MditInitOptions } from "./CoreEditor/types"
import type { Extension as CmExtension } from '@codemirror/state'
import type { VNode, UnwrapNestedRefs } from 'vue'
import { reactive } from 'vue'

/**
 * prefix 'mdit' indicates that the function/property is related to markdown-it
 * prefix 'cm' indicates that the function/property is related to codemirror
 */
export interface CorePlugin {
  // markdown-it
  mditInitOptions?: MditInitOptions
  mditLoadPlugins?: MditLoadPlugin[]
  mditCodeRendererMap?: MditCodeRendererMap
  mditRendererRuleMap?: MditRendererRuleMap
  mditBeforeRender?: () => void
  mditAfterRender?: () => void

  // codemirror
  cmDomEventHandlerMap?: CmDomEventHandlerMap
  cmExtensions?: CmExtension[]
  cmDocChanged?: CmDocChanged
  cmMarkdownConfig?: object

  // lifecycle
  mounted?: () => void
  beforeDestroy?: () => void

  // others
  commandMap?: CommandMap
  extraVnodes?: VNode[]
}

export class CorePluginManager {
  plugins: CorePlugin[]

  constructor() {
    this.plugins = []
  }

  /**
   * register plugins
   * @param plugins 
   */
  registerPlugins(plugins: CorePlugin[]) {
    plugins.forEach((plugin) => {
      this.registerPlugin(plugin)
    })
  }

  /**
   * register a plugin
   * @param plugin 
   */
  registerPlugin(plugin: CorePlugin): void {
    this.plugins.push(plugin)
  }

  mditBeforeRender(): void {
    this.plugins.forEach((plugin) => {
      plugin.mditBeforeRender && plugin.mditBeforeRender.apply(plugin)
    })
  }

  /**
   * execute every plugin's midtAfterRender method
   */
  mditAfterRender(): void {
    this.plugins.forEach((plugin) => {
      plugin.mditAfterRender && plugin.mditAfterRender.apply(plugin)
    })
  }

  /**
   * get the merged map of all plugin's midtCodeRendererMap property
   * @returns 
   */
  getMditCodeRendererMap(): MditCodeRendererMap {
    const codeRendererMap: MditCodeRendererMap = {}
    this.plugins.forEach((plugin) => {
      if (plugin.mditCodeRendererMap) {
        for (const lang of Object.keys(plugin.mditCodeRendererMap)) {
          codeRendererMap[lang] = plugin.mditCodeRendererMap[lang].bind(plugin)
        }
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

  getMditInitOptions(): MditInitOptions {
    const options: MditInitOptions = {}

    this.plugins.forEach((plugin) => {
      if (plugin.mditInitOptions) {
        Object.assign(options, plugin.mditInitOptions)
      }
    })

    return options
  }

  getMditLoadPlugins(): MditLoadPlugin[] {
    const loadPlugins: MditLoadPlugin[] = []
    this.plugins.forEach((plugin) => {
      if (plugin.mditLoadPlugins) {
        plugin.mditLoadPlugins.forEach((loadPlugin) => {
          loadPlugins.push(loadPlugin)
        })
      }
    })

    return loadPlugins
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

  getCmExtensions(): CmExtension[] {
    const exts: CmExtension[] = []
    this.plugins.forEach((plugin) => {
      if (plugin.cmExtensions) {
        exts.splice(exts.length - 1, 0, plugin.cmExtensions)
      }
    })

    return exts
  }

  getCmMarkdownConfig(): object {
    const config = {}
    this.plugins.forEach((plugin) => {
      if (plugin.cmMarkdownConfig) {
        Object.assign(config, plugin.cmMarkdownConfig)
      }
    })

    return config
  }

  cmDocChanged(doc: string): void {
    this.plugins.forEach((plugin) => {
      plugin?.cmDocChanged?.(doc)
    })
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

  getExtraVnodes(): UnwrapNestedRefs<VNode[]> {
    const vnodes: VNode[] = []
    this.plugins.forEach((plugin) => {
      if (plugin.extraVnodes) {
        plugin.extraVnodes.forEach((vnode) => {
          vnodes.push(vnode)
        })
      }
    })

    return reactive<VNode[]>(vnodes)
  }
}