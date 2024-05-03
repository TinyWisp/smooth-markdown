<template>
  <div class="toolbar">
    <template v-for="(item, idx) of calcToolbarItems" :key="item.name + idx">
      <!-- divider -->
      <el-divider direction="vertical" v-if="item.name === 'divider'"/>

      <!-- spacer -->
      <div class="spacer" v-else-if="item.name === 'spacer'"/>

      <!-- custom button -->
      <v-node-renderer :vnodes="[item.vnode()]" v-else-if="item.vnode" />

      <!-- custom component -->
      <component :is="item.comp" v-else-if="item.comp"></component>

      <!-- button -->
      <el-tooltip
        :key="(item.name ?? '') + idx"
        :content="typeof item.tip === 'string' ? item.tip : item.tip?.()"
        v-else
      >
        <el-button
          @click="clickToolbarButton(item)"
          text
        >
          <template v-slot:icon>
            <i v-if="typeof item.icon === 'string'" :class="item.icon"></i>
            <i v-else-if="typeof item.icon === 'function'" :class="item.icon()"></i>
          </template>
        </el-button>
      </el-tooltip>
    </template>
  </div>
</template>

<script setup lang="tsx">
import type { ToolbarItemMap, ToolbarItem } from './types'
import type { VNode, Component } from 'vue'
import { computed, inject, isVNode } from 'vue'
import { VNodeRenderer, type Context, type FnGetContext } from '@smooth-markdown/core'
import ImageBtn from './ImageBtn';
import LinkBtn from './LinkBtn';
import TableBtn from './TableBtn';
import type { FnUpload } from './ImageBtn/types'

export interface ElementToolbarProps {
  items?: (string | Component | VNode | (() => VNode))[],
  fnUpload?: FnUpload
}

const props = withDefaults(defineProps<ElementToolbarProps>(), {
  items: () => ['undo', 'redo', 'divider', 
    'bold', 'italic', 'strike', 'underline', 'subscript', 'superscript', 'mark', 'heading1', 'heading2', 'heading3', 'divider',
    'bulletedList', 'numberedList', 'quote', 'codeBlock', 'link', 'image', 'horizontalRule', 'table',
    'spacer',
    'preview'
  ],
})

const getContext = inject<FnGetContext>('getContext')
const context: Context = (getContext!)()
const { t } = context.lang!
const { command } = context.editor
const { getMode, setMode } = context

const toolbarItemMap: ToolbarItemMap = {
  divider: {
    name: 'divider',
  },
  spacer: {
    name: 'spacer'
  },
  undo: {
    name: 'undo',
    icon: 'mdi mdi-undo',
    cmd: 'undo',
    tip: () => t('toolbar.undo')
  },
  redo: {
    name: 'redo',
    icon: 'mdi mdi-redo',
    cmd: 'redo',
    tip: () => t('toolbar.redo')
  },
  bold: {
    name: 'bold',
    icon: 'mdi mdi-format-bold',
    cmd: 'bold',
    tip: () => t('toolbar.bold')
  },
  italic: {
    name: 'italic',
    icon: 'mdi mdi-format-italic',
    cmd: 'italic',
    tip: () => t('toolbar.italic')
  },
  strike: {
    name: 'strike',
    icon: 'mdi mdi-format-strikethrough',
    cmd: 'strike',
    tip: () => t('toolbar.strike')
  },
  underline: {
    name: 'underline',
    icon: 'mdi mdi-format-underline',
    cmd: 'underline',
    tip: () => t('toolbar.underline')
  },
  subscript: {
    name: 'subscript',
    icon: 'mdi mdi-format-subscript',
    cmd: 'subscript',
    tip: () => t('toolbar.subscript')
  },
  superscript: {
    name: 'superscript',
    icon: 'mdi mdi-format-superscript',
    cmd: 'superscript',
    tip: () => t('toolbar.superscript')
  },
  mark: {
    name: 'mark',
    icon: 'mdi mdi-format-color-highlight',
    cmd: 'mark',
    tip: () => t('toolbar.mark')
  },
  heading1: {
    name: 'heading1',
    icon: 'mdi mdi-format-header-1',
    cmd: 'heading1',
    tip: () => t('toolbar.heading1')
  },
  heading2: {
    name: 'heading2',
    icon: 'mdi mdi-format-header-2',
    cmd: 'heading2',
    tip: () => t('toolbar.heading2')
  },
  heading3: {
    name: 'heading3',
    icon: 'mdi mdi-format-header-3',
    cmd: 'heading3',
    tip: () => t('toolbar.heading3')
  },
  heading4: {
    name: 'heading4',
    icon: 'mdi mdi-format-header-',
    cmd: 'heading4',
    tip: () => t('toolbar.heading4')
  },
  heading5: {
    name: 'heading5',
    icon: 'mdi mdi-format-header-5',
    cmd: 'heading5',
    tip: () => t('toolbar.heading5')
  },
  heading6: {
    name: 'heading6',
    icon: 'mdi mdi-format-header-6',
    cmd: 'heading6',
    tip: () => t('toolbar.heading6')
  },
  bulletedList: {
    name: 'bulletedList',
    icon: 'mdi mdi-format-list-bulleted',
    cmd: 'bulletedList',
    tip: () => t('toolbar.bulletedList')
  },
  numberedList: {
    name: 'numberedList',
    icon: 'mdi mdi-format-list-numbered',
    cmd: 'numberedList',
    tip: () => t('toolbar.numberedList')
  },
  quote: {
    name: 'quote',
    icon: 'mdi mdi-format-quote-close',
    cmd: 'quote',
    tip: () => t('toolbar.quote')
  },
  codeBlock: {
    name: 'codeBlock',
    icon: 'mdi mdi-code-tags',
    cmd: 'codeBlock',
    tip: () => t('toolbar.codeBlock')
  },
  horizontalRule: {
    name: 'horizontalRule',
    icon: 'mdi mdi-minus',
    cmd: 'horizontalRule',
    tip: () => t('toolbar.horizontalRule')
  },
  image: {
    name: 'image',
    vnode: () => {
      return (<ImageBtn fnUploadImage={props.fnUpload}></ImageBtn>)
    }
  },
  link: {
    name: 'link',
    comp: LinkBtn
  },
  table: {
    name: 'table',
    comp: TableBtn
  },
  preview: {
    name: 'preview',
    icon: () => {
      return getMode() === 'editor|viewer'
              ? 'mdi mdi-eye-off-outline'
              : 'mdi mdi-eye-outline'
    },
    exec: () => {
      setMode(getMode() === 'editor|viewer' ? 'editor' : 'editor|viewer')
    },
    tip: () => {
      return getMode() === 'editor|viewer'
             ? t('toolbar.closePreview')
             : t('toolbar.openPreview')
    }
  }
}



const calcToolbarItems = computed<ToolbarItem[]>(() => {
  const items: ToolbarItem[] = []
  props.items!.forEach((val: (ToolbarItem | VNode | (() => VNode) | Component | string)) => {
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

    if (typeof val === 'function') {
      items.push({
        name: 'vnode',
        vnode: val as (() => VNode)
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

<style scoped>
.toolbar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}
.toolbar > button, .toolbar > div {
  flex-shrink: 0;
  flex-grow: 0;
}
.toolbar > .spacer {
  flex-shrink: 1;
  flex-grow: 1;
}
:deep(.el-button + .el-button) {
  margin-left: 0;
}
</style>
