import type { Ref } from 'vue'

// ---------------- types related to markdown-it  -------------------

export type MditCodeRenderer = (code: string, lang: string) => string

export interface MditCodeRendererMap {
  [key: string]: MditCodeRenderer
}

export type MditRendererRule = (tokens: any[], idx: number, options?: object, env?: object, slf?: object) => string

export interface MditRendererRuleMap {
  [key: string]: MditRendererRule
}

export type MditLoadPlugin = [Function, object] | [Function]

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

export type CmDocChanged = (doc: string) => void

// ------------------------------------------------------------------

export interface CoreContext {
  methods: {
    [key: string]: Function
  },
  doms: {
    [key: string]: Ref<HTMLElement | null>
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