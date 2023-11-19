import type { VNode, Component } from 'vue'

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