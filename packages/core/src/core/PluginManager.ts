import type { 
  CmDomEventHandlerMap,
  CmPasteEventHandlerMap, 
  MditCodeRendererMap, 
  MditRendererRuleMap, 
  CommandMap, MditLoadPlugin, 
  MditInitOptions, 
  Plugin, 
  Wrapper,
  FnGetContext,
  FnSetContext,
} from "./types"
import type { Extension as CmExtension } from '@codemirror/state'
import type { VNode, Ref } from 'vue'
import type { MessageMap } from './Lang'
import { reactive } from 'vue'
import { merge } from 'lodash/merge'

export class PluginManager {
  plugins: Plugin[]
  getContext: FnGetContext
  setContext: FnSetContext

  constructor(getContext: FnGetContext, setContext: FnSetContext) {
    this.plugins = []
    this.getContext = getContext
    this.setContext = setContext
  }

  /**
   * register plugins
   * @param plugins 
   */
  registerPlugins(plugins: Plugin[]) {
    plugins.forEach((plugin) => {
      this.registerPlugin(plugin)
    })
  }

  /**
   * register a plugin
   * @param plugin 
   */
  registerPlugin(plugin: Plugin): void {
    if (plugin.name.indexOf('core-plugin-') !== 0) {
      console.error('a valid plugin has a name that begins with "core-plugin-"')
      return
    }

    this.plugins.push(plugin)
  }

  /**
   * unregister a plugin
   */
  unregisterPlugin(name: string): void {
    this.plugins = this.plugins.filter((plugin) => {
      return plugin.name !== name
    })
  }

  /**
   * execute every plugin's init method
   */
  init() {
     this.plugins.forEach((plugin) => {
      plugin.init && plugin.init(this.getContext, this.setContext)
    })
  }

  /**
   * execute every plugin's midtBeforeRender method
   */
  mditBeforeRender(): void {
    this.plugins.forEach((plugin) => {
      plugin.mditBeforeRender && plugin.mditBeforeRender()
    })
  }

  /**
   * execute every plugin's midtAfterRender method
   */
  mditAfterRender(): void {
    this.plugins.forEach((plugin) => {
      plugin.mditAfterRender && plugin.mditAfterRender()
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
        for (const rule of Object.keys(plugin.mditRendererRuleMap)) {
          rendererRuleMap[rule] = plugin.mditRendererRuleMap[rule].bind(plugin)
        }
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

  getCmPasteEventHandlerMap(): CmPasteEventHandlerMap {
    const cmPasteEventHandlerMap: CmPasteEventHandlerMap = {}
    this.plugins.forEach((plugin) => {
      if (plugin.cmPasteEventHandlerMap) {
        for (const ctype of Object.keys(plugin.cmPasteEventHandlerMap)) {
          cmPasteEventHandlerMap[ctype] = plugin.cmPasteEventHandlerMap[ctype].bind(plugin)
        }
      }
    })

    return cmPasteEventHandlerMap
  }

  getCmExtensions(): CmExtension[] {
    const exts: CmExtension[] = []
    this.plugins.forEach((plugin) => {
      if (plugin.cmExtensions) {
        plugin.cmExtensions.forEach((ext) => {
          exts.push(ext)
        })
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

  getCommandMap(): CommandMap {
    const commandMap: CommandMap = {}
    this.plugins.forEach((plugin) => {
      if (plugin.commandMap) {
        Object.assign(commandMap, plugin.commandMap)
      }
    })

    return commandMap
  }

  getExtraVnodes(): VNode[] {
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

  getMessageMap(): MessageMap {
    let messageMap: MessageMap = {}
    this.plugins.forEach((plugin) => {
      if (plugin?.messageMap) {
        messageMap = merge(messageMap, plugin.messageMap)
      }
    })

    return messageMap
  }

  getToolbarWrapperList(): Wrapper[] {
    const wrapperList: Wrapper[] = []
    this.plugins.forEach((plugin) => {
      if (plugin?.toolbarWrapper) {
        wrapperList.push(plugin.toolbarWrapper)
      }
    })

    return wrapperList
  }

  getEditorWrapperList(): Wrapper[] {
    const wrapperList: Wrapper[] = []
    this.plugins.forEach((plugin) => {
      if (plugin?.editorWrapper) {
        wrapperList.push(plugin.editorWrapper)
      }
    })

    return wrapperList
  }

  getViewerWrapperList(): Wrapper[] {
    const wrapperList: Wrapper[] = []
    this.plugins.forEach((plugin) => {
      if (plugin?.viewerWrapper) {
        wrapperList.push(plugin.viewerWrapper)
      }
    })

    return wrapperList
  }

  getTocWrapperList(): Wrapper[] {
    const wrapperList: Wrapper[] = []
    this.plugins.forEach((plugin) => {
      if (plugin?.tocWrapper) {
        wrapperList.push(plugin.tocWrapper)
      }
    })

    return wrapperList
  }

  getCss(): string {
    let css = ''
    this.plugins.forEach((plugin) => {
      if (plugin?.css) {
        css = css + '\n' + plugin.css
      }
    })

    return css
  }

  getEditorScrollEl(): Ref<HTMLElement | null> | null {
    let editorScrollEl = null
    this.plugins.forEach((plugin) => {
      if (plugin.editorScrollEl) {
        editorScrollEl = plugin.editorScrollEl
      }
    })

    return editorScrollEl
  }

  getViewerScrollEl(): Ref<HTMLElement | null> | null {
    let viewerScrollEl = null 
    this.plugins.forEach((plugin) => {
      if (plugin.viewerScrollEl) {
        viewerScrollEl = plugin.viewerScrollEl
      }
    })

    return viewerScrollEl
  }

  getTocScrollEl(): Ref<HTMLElement | null> | null {
    let tocScrollEl = null 
    this.plugins.forEach((plugin) => {
      if (plugin.tocScrollEl) {
        tocScrollEl = plugin.tocScrollEl
      }
    })

    return tocScrollEl
  }
}