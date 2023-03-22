import type { Ref } from 'vue'

export type MditCodeRenderer = (code: string, lang: string) => string

export interface MditCodeRendererMap {
  [key: string]: MditCodeRenderer
}

export type MditRendererRule = (tokens: any[], idx: number, options?: object, env?: object, slf?: object) => string

export interface MditRendererRuleMap {
  [key: string]: MditRendererRule
}

export type CmDomEventHandlerMap = {
  [key: string]: (event: Event) => void
}

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