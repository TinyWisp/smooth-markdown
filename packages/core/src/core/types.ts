import type { Ref, Component, VNode } from 'vue'
import type { PluginSimple as MditPluginSimple, PluginWithOptions as MditPluginWithOptions, PluginWithParams as MditPluginWithParams, Token as MditToken} from 'markdown-it'
import type { MessageMap } from './Lang'
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

// ---------------------- Plugin -------------------

/**
 * prefix 'mdit' indicates that the function/property is related to markdown-it
 * prefix 'cm' indicates that the function/property is related to codemirror
 */
export interface Plugin {
  name: string

  // init
  init?: (getContext: FnGetContext, setContext: FnSetContext) => void

  // markdown-it
  mditInitOptions?: MditInitOptions
  mditLoadPlugins?: MditLoadPlugin[]
  mditCodeRendererMap?: MditCodeRendererMap
  mditRendererRuleMap?: MditRendererRuleMap
  mditBeforeRender?: () => void
  mditAfterRender?: () => void

  // codemirror
  cmDomEventHandlerMap?: CmDomEventHandlerMap
  cmPasteEventHandlerMap?: CmPasteEventHandlerMap
  cmExtensions?: CmExtension[]
  cmDocChanged?: CmDocChanged
  cmMarkdownConfig?: object

  // toc
  tocUasOptions?: Object

  // elements
  toolbarWrapper?: Wrapper
  editorWrapper?: Wrapper
  viewerWrapper?: Wrapper
  tocWrapper?: Wrapper
  editorScrollEl?: Ref<HTMLElement | null>
  viewerScrollEl?: Ref<HTMLElement | null>
  tocScrollEl?: Ref<HTMLElement | null>
  css?: String

  // others
  commandMap?: CommandMap
  extraVnodes?: VNode[]
  messageMap?: MessageMap
}

// ----------------------------Context----------------------------

export interface Context {
  methods: {
    [key: string]: Function
  },
  doms: {
    [key: string]: Ref<HTMLElement | null>
  },
  selectors: {
    [key: string]: string
  },
  data: {
    [key: string]: any
  },
  instances: {
    [key: string]: any
  },
  others: {
    [key: string]: any
  }
}

export type FnGetContext = () => Context

export type FnSetContext = (key: keyof Context, subKey: string, val: any) => void

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

export type TocSpy = {
  headingList: Ref<Heading[]>
  activeIndex: Ref<number>
  setActive: (idx: number) => void
}