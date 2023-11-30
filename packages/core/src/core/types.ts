import type { Ref, Component, VNode } from 'vue'
import type { PluginSimple as MditPluginSimple, PluginWithOptions as MditPluginWithOptions, PluginWithParams as MditPluginWithParams} from 'markdown-it'
import type { MessageMap } from './lang'
import type { Extension as CmExtension } from '@codemirror/state'

// ---------------- types related to markdown-it  -------------------

export type MditCodeRenderer = (code: string, lang: string) => string

export interface MditCodeRendererMap {
  [key: string]: MditCodeRenderer
}

export type MditRendererRule = (tokens: any[], idx: number, options?: object, env?: object, slf?: object) => string

export interface MditRendererRuleMap {
  [key: string]: MditRendererRule
}

export type MditPlugin = MditPluginSimple | MditPluginWithOptions | MditPluginWithParams

export type MditLoadPlugin = [MditPlugin, object] | [MditPlugin]

export interface MditInitOptions {
  [key: string]: any
}

export type MditTokenAttr = [string, string]

export type MditTokenAttrs = MditTokenAttr[]

export type MditTokenAttrMap = {
  [key: string]: string
}


// ------------------ types related to codemirror -------------------

export type CmDomEventHandlerMap = {
  [key: string]: (event: Event) => void
}

export type CmPasteEventHandlerMap = {
  [key: string]: (item: DataTransferItem) => void
}

export type CmDocChanged = (doc: string) => void

export type CmScrollHandler = (scrollHeight: number, scrollTop: number, scrollOffset: number) => void

export type Command = (cmd: string, params: object) => void

export interface CommandMap {
  [key: string]: Command
}

// ---------------------- CorePlugin -------------------

/**
 * prefix 'mdit' indicates that the function/property is related to markdown-it
 * prefix 'cm' indicates that the function/property is related to codemirror
 */
export interface CorePlugin {
  name: string
  getCoreContext?: FnGetCoreContext
  setCoreContext?: FnSetCoreContext

  // event handler list
  coreEventHandlerList?: CoreEventHandler[]

  // markdown-it
  mditInitOptions?: MditInitOptions
  mditLoadPlugins?: MditLoadPlugin[]
  mditCodeRendererMap?: MditCodeRendererMap
  mditRendererRuleMap?: MditRendererRuleMap
  mditBeforeRender?: () => void
  mditAfterRender?: () => void
  mditWrapper?: Wrapper

  // codemirror
  cmDomEventHandlerMap?: CmDomEventHandlerMap
  cmPasteEventHandlerMap?: CmPasteEventHandlerMap
  cmExtensions?: CmExtension[]
  cmDocChanged?: CmDocChanged
  cmMarkdownConfig?: object
  cmScrollHandler?: CmScrollHandler
  cmWrapper?: Wrapper

  // toolbar
  toolbarWrapper?: Wrapper

  // lifecycle
  mounted?: () => void
  beforeDestroy?: () => void

  // others
  commandMap?: CommandMap
  extraVnodes?: VNode[]
  messageMap?: MessageMap
}

// ----------------------------CoreContext----------------------------

export interface CoreContext {
  methods: {
    [key: string]: Function
  },
  doms: {
    [key: string]: HTMLElement | null
  },
  props: {
    [key: string]: any
  },
  instances: {
    [key: string]: any
  },
  others: {
    [key: string]: any
  }
}

export type FnGetCoreContext = () => CoreContext

export type FnSetCoreContext = (key: keyof CoreContext, subKey: string, val: any) => void

// ------------------------------------------------------------------

export type Wrapper = [Component, {[key: string]: any}]

export type FnUpload = (file: File) => string | Promise<string>

export type Mode = 'edit' | 'view' | 'both'

export type CoreEventHandler = [src: string, event: string, func: Function]
