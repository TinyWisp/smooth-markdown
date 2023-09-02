import type { VNode, Ref } from 'vue'

export interface ToolbarItem {
  name?: string
  icon?: string | (() => string)
  tip?: string | (() => string)
  cmd?: string
  exec?: () => void
  vnode?: () => VNode
}

export interface ToolbarItemMap {
  [key: string]: ToolbarItem
}

export interface VuetifyContext {
  methods: {
    [key: string]: Function
  },
  refs: {
    [key: string]: Ref
  },
  props: object,
}

export type Mode = 'edit' | 'view' | 'both'