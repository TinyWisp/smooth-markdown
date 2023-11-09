import type { Ref } from 'vue'
import type { PluginSimple as MditPluginSimple, PluginWithOptions as MditPluginWithOptions, PluginWithParams as MditPluginWithParams} from 'markdown-it'

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

// ------------------------------------------------------------------

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
}

export type Command = (cmd: string, params: object) => void

export interface CommandMap {
  [key: string]: Command
}

export type FnUpload = (file: File) => string | Promise<string>