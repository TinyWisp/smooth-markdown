<template>
  <v-toolbar density="compact" class="svme-toolbar">
    <template v-for="(item, idx) of calcToolbarItems" :key="item.name + idx">
      <!-- divider -->
      <v-divider
        class="vertical-divider mx-2"
        vertical
        v-if="item.name === 'divider'"/>

      <!-- spacer -->
      <v-spacer v-else-if="item.name === 'spacer'"/>

      <!-- custom button -->
      <v-node-renderer :vnodes="[item.vnode()]" v-else-if="item.vnode" />

      <!-- custom component -->
      <component :is="item.comp" v-else-if="item.comp"></component>

      <!-- button -->
      <v-btn
        size="small"
        variant="flat"
        color="white"
        class="svme-toolbar-button"
        :key="(item.name ?? '') + idx"
        @click="clickToolbarButton(item)"
        v-else>
        <v-icon small color="grey darken-1" :icon="typeof item.icon === 'function' ? item.icon() : item.icon"></v-icon>
        <v-tooltip location="bottom" activator="parent">{{ typeof item.tip === 'function' ? item.tip() : t(`svme.toolbar.${item.name}`)}}</v-tooltip>
      </v-btn>

    </template>
  </v-toolbar>
</template>

<script setup lang="ts">
import {
  mdiUndo,
  mdiRedo,
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatStrikethrough,
  mdiFormatUnderline,
  mdiFormatSubscript,
  mdiFormatSuperscript,
  mdiFormatColorHighlight,
  mdiFormatHeader1,
  mdiFormatHeader2,
  mdiFormatHeader3,
  mdiFormatHeader4,
  mdiFormatHeader5,
  mdiFormatHeader6,
  mdiFormatListBulleted,
  mdiFormatListNumbered,
  mdiFormatQuoteClose,
  mdiCodeTags,
  mdiMinus,
  mdiEyeOffOutline,
  mdiEyeOutline,
} from '@mdi/js'
import type { ToolbarItemMap, ToolbarItem, VuetifyContext } from './types'
import type { VNode, Component } from 'vue'
import { computed, inject, isVNode } from 'vue'
import { VNodeRenderer } from '@smooth-vue-markdown-editor/core'

export interface VuetifyToolbarProps {
  items: (string | Component | VNode)[]
}

const props = withDefaults(defineProps<VuetifyToolbarProps>(), {
  items: () => ['undo', 'redo', 'divider', 
    'bold', 'italic', 'strike', 'underline', 'subscript', 'superscript', 'mark', 'heading1', 'heading2', 'heading3', 'divider',
    'bulletedList', 'numberedList', 'quote', 'codeBlock', 'link', 'image', 'horizontalRule', 'table',
    'spacer',
    'preview'
  ],
})

const getVuetifyContext = inject<() => VuetifyContext>('getVuetifyContext')
const vuetifyContext: VuetifyContext = (getVuetifyContext!)()
const pluginManager = vuetifyContext.pluginManager
const t = vuetifyContext.methods.t
const command = vuetifyContext.methods.command
const setMode = vuetifyContext.methods.setMode

const toolbarItemMap: ToolbarItemMap = {
  divider: {
    name: 'divider',
  },
  spacer: {
    name: 'spacer'
  },
  undo: {
    name: 'undo',
    icon: mdiUndo,
    cmd: 'undo',
  },
  redo: {
    name: 'redo',
    icon: mdiRedo,
    cmd: 'redo',
  },
  bold: {
    name: 'bold',
    icon: mdiFormatBold,
    cmd: 'bold',
  },
  italic: {
    name: 'italic',
    icon: mdiFormatItalic,
    cmd: 'italic',
  },
  strike: {
    name: 'strike',
    icon: mdiFormatStrikethrough,
    cmd: 'strike',
  },
  underline: {
    name: 'underline',
    icon: mdiFormatUnderline,
    cmd: 'underline',
  },
  subscript: {
    name: 'subscript',
    icon: mdiFormatSubscript,
    cmd: 'subscript',
  },
  superscript: {
    name: 'superscript',
    icon: mdiFormatSuperscript,
    cmd: 'superscript',
  },
  mark: {
    name: 'mark',
    icon: mdiFormatColorHighlight,
    cmd: 'mark',
  },
  heading1: {
    name: 'heading1',
    icon: mdiFormatHeader1,
    cmd: 'heading1',
  },
  heading2: {
    name: 'heading2',
    icon: mdiFormatHeader2,
    cmd: 'heading2',
  },
  heading3: {
    name: 'heading3',
    icon: mdiFormatHeader3,
    cmd: 'heading3',
  },
  heading4: {
    name: 'heading4',
    icon: mdiFormatHeader4,
    cmd: 'heading4',
  },
  heading5: {
    name: 'heading5',
    icon: mdiFormatHeader5,
    cmd: 'heading5',
  },
  heading6: {
    name: 'heading6',
    icon: mdiFormatHeader6,
    cmd: 'heading6',
  },
  bulletedList: {
    name: 'bulletedList',
    icon: mdiFormatListBulleted,
    cmd: 'bulletedList',
  },
  numberedList: {
    name: 'numberedList',
    icon: mdiFormatListNumbered,
    cmd: 'numberedList',
  },
  quote: {
    name: 'quote',
    icon: mdiFormatQuoteClose,
    cmd: 'quote',
  },
  codeBlock: {
    name: 'codeBlock',
    icon: mdiCodeTags,
    cmd: 'codeBlock',
  },
  horizontalRule: {
    name: 'horizontalRule',
    icon: mdiMinus,
    cmd: 'horizontalRule',
  },
  preview: {
    name: 'preview',
    icon: () => {
      return vuetifyContext.props?.mode === 'both'
              ? mdiEyeOffOutline
              : mdiEyeOutline
    },
    exec: () => {
      setMode(vuetifyContext.props?.mode === 'both' ? 'edit' : 'both')
    },
    tip: () => {
      return vuetifyContext.props?.mode === 'both'
             ? t('svme.toolbar.closePreview')
             : t('svme.toolbar.openPreview')
    }
  },
  ...pluginManager.getToolbarItemMap()
}
const calcToolbarItems = computed<ToolbarItem[]>(() => {
  const items: ToolbarItem[] = []
  props.items!.forEach((val: (ToolbarItem | VNode | Component | string)) => {
    if (typeof val === 'string') {
      if (!toolbarItemMap[val]) {
        console.error(`invalid toolbar item: ${val}`)
        return
      } else {
        const item = { ...toolbarItemMap[val] }
        if (!item?.name) {
          item.name = val
        }
        items.push(item)
        return
      }
    }

    if (isVNode(val)) {
      items.push({
        name: 'vnode',
        vnode: () => val
      })
      return
    }

    if ('_isVue' in val) {
      items.push({
        name: 'component',
        comp: val
      })
      return
    }

    items.push(val as ToolbarItem)
  })
  return items
})

function clickToolbarButton (item: ToolbarItem) {
  if (item.exec) {
    item.exec()

  } else if (item.cmd) {
    command(item.cmd)
  }
}
</script>