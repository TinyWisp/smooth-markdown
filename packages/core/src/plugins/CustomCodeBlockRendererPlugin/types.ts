import type { Ref, VNode, Component } from "vue"

export interface LangComponentMap {
  [lang: string]: [Component, object?]
}

export interface CodeBlock {
  id: string
  lang: string
  langAttrs: string
  code: string
  lineBegin: number
  lineEnd: number
  component?: Component
  componentProps?: {
    [key: string]: any
  }
  target?: HTMLElement 
}

export interface CodeBlockMap {
  [key: number]: CodeBlock
}
