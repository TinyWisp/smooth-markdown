import type { VuetifyPluginManager } from '@/VuetifyPlugin'
import type { VNode, Ref, Component } from 'vue'

export interface ToolbarItem {
  name?: string
  icon?: string | (() => string)
  tip?: string | (() => string)
  cmd?: string
  exec?: () => void
  vnode?: () => VNode
  comp?: Component
}

export interface ToolbarItemMap {
  [key: string]: ToolbarItem
}

export interface VuetifyContext {
  pluginManager: VuetifyPluginManager
  methods: {
    [key: string]: Function
  },
  refs: {
    [key: string]: Ref
  },
  props: {
    [key: string]: any
  },
}

export type Mode = 'edit' | 'view' | 'both'