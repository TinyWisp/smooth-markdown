import type { Ref, Component, VNode, ShallowRef } from 'vue'
import type { PluginSimple as MditPluginSimple, PluginWithOptions as MditPluginWithOptions, PluginWithParams as MditPluginWithParams, Token as MditToken} from 'markdown-it'
import type { Lang } from './Lang'
import type { Extension as CmExtension } from '@codemirror/state'
import type { EventBus } from './EventBus'
import type { PluginManager } from './PluginManager'

// ---------------- types related to markdown-it  -------------------

export type MditCodeRenderer = (code: string, lang: string, langAttrs: string, lineBegin: number, lineEnd: number) => string

export interface MditCodeRendererMap {
  [key: string]: MditCodeRenderer
}

export type MditRendererRule = (tokens: MditToken[], idx: number, options?: object, env?: object, slf?: object) => string

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

// ---------------------- Plugin -------------------

/**
 * prefix 'mdit' indicates that the function/property is related to markdown-it
 * prefix 'cm' indicates that the function/property is related to codemirror
 */
export interface Plugin {
  name: string

  // init
  init?: (getContext: FnGetContext, setContext: FnSetContext) => void
  free?: () => void

  // markdown-it
  mditInitOptions?: MditInitOptions
  mditLoadPlugins?: MditLoadPlugin[]
  mditCodeRendererMap?: MditCodeRendererMap
  mditRendererRuleMap?: MditRendererRuleMap
  mditBeforeRender?: () => void
  mditTransformTokens?: (tokens: MditToken[]) => void
  mditAfterRender?: () => void

  // codemirror
  cmDomEventHandlerMap?: CmDomEventHandlerMap
  cmPasteEventHandlerMap?: CmPasteEventHandlerMap
  cmExtensions?: CmExtension[]
  cmMarkdownConfig?: object

  // elements
  toolbarWrapper?: Wrapper
  editorWrapper?: Wrapper
  viewerWrapper?: Wrapper
  tocWrapper?: Wrapper
  codeBlockWrapper?: Wrapper
  editorScrollEl?: Ref<HTMLElement | null>
  viewerScrollEl?: Ref<HTMLElement | null>
  tocScrollEl?: Ref<HTMLElement | null>
  css?: String

  // others
  commandMap?: CommandMap
  extraVnodes?: ShallowRef<VNode[]>
  messageMap?: MessageMap
}

// ----------------------------Context----------------------------
export type PanelContext = {
  el?: Ref<HTMLElement | null>
  selector?: string
  containerEl?: Ref<HTMLElement | null>
  containerSelector?: string
  scrollEl?: Ref<HTMLElement | null>
  [key: string]: any
}

export type Context = {
  lang?: Lang
  eventBus?: EventBus
  pluginManager?: PluginManager
  viewer: PanelContext,
  editor: PanelContext,
  toc: PanelContext,
  root: PanelContext 
  header: PanelContext 
  body: PanelContext
  others: {
    [key: string]: any
  }
  [key: string]: any
}

export type FnGetContext = () => Context

export type FnSetContext = (key: keyof Context, subKey: string, val: any) => void


// -----------------------------Lang-------------------------------------

export interface MessageMap {
  [key: string]: string | MessageMap
}

export interface VariableMap {
  [key: string]: string
}

// ------------------------------------------------------------------

export type Wrapper = [Component] | [Component, {[key: string]: any}] | [Component, {[key: string]: any}, string]

export type FnUpload = (file: File) => string | Promise<string>

export type CoreEventHandler = [src: string, event: string, func: Function]

export type Heading = {
  level: number
  text: string
  id: string
  lineNum: number
}

export interface RendererProps {
  lang: string
  code: string
  lineBegin: number
  lineEnd: number
}