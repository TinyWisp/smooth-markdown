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
            <mdi-js-icon :path="typeof item.icon === 'function' ? item.icon() : item.icon!"></mdi-js-icon>
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
import MdiJsIcon from './MdiJsIcon.vue'
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
  mdiTextBoxOutline
} from '@mdi/js'

export interface ElementToolbarProps {
  items?: (string | Component | VNode | (() => VNode))[],
  fnUpload?: FnUpload
}

const props = withDefaults(defineProps<ElementToolbarProps>(), {
  items: () => ['undo', 'redo', 'divider', 
    'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', 'mark', 'heading1', 'heading2', 'heading3', 'divider',
    'bulletedList', 'numberedList', 'quote', 'codeBlock', 'link', 'image', 'horizontalRule', 'table',
    'spacer',
    'preview', 'toc'
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
    icon: mdiUndo,
    cmd: 'undo',
    tip: () => t('toolbar.undo')
  },
  redo: {
    name: 'redo',
    icon: mdiRedo,
    cmd: 'redo',
    tip: () => t('toolbar.redo')
  },
  bold: {
    name: 'bold',
    icon: mdiFormatBold,
    cmd: 'bold',
    tip: () => t('toolbar.bold')
  },
  italic: {
    name: 'italic',
    icon: mdiFormatItalic,
    cmd: 'italic',
    tip: () => t('toolbar.italic')
  },
  strikethrough: {
    name: 'strikethrough',
    icon: mdiFormatStrikethrough,
    cmd: 'strikethrough',
    tip: () => t('toolbar.strikethrough')
  },
  underline: {
    name: 'underline',
    icon: mdiFormatUnderline,
    cmd: 'underline',
    tip: () => t('toolbar.underline')
  },
  subscript: {
    name: 'subscript',
    icon: mdiFormatSubscript,
    cmd: 'subscript',
    tip: () => t('toolbar.subscript')
  },
  superscript: {
    name: 'superscript',
    icon: mdiFormatSuperscript,
    cmd: 'superscript',
    tip: () => t('toolbar.superscript')
  },
  mark: {
    name: 'mark',
    icon: mdiFormatColorHighlight,
    cmd: 'mark',
    tip: () => t('toolbar.mark')
  },
  heading1: {
    name: 'heading1',
    icon: mdiFormatHeader1,
    cmd: 'heading1',
    tip: () => t('toolbar.heading1')
  },
  heading2: {
    name: 'heading2',
    icon: mdiFormatHeader2,
    cmd: 'heading2',
    tip: () => t('toolbar.heading2')
  },
  heading3: {
    name: 'heading3',
    icon: mdiFormatHeader3,
    cmd: 'heading3',
    tip: () => t('toolbar.heading3')
  },
  heading4: {
    name: 'heading4',
    icon: mdiFormatHeader4,
    cmd: 'heading4',
    tip: () => t('toolbar.heading4')
  },
  heading5: {
    name: 'heading5',
    icon: mdiFormatHeader5,
    cmd: 'heading5',
    tip: () => t('toolbar.heading5')
  },
  heading6: {
    name: 'heading6',
    icon: mdiFormatHeader6,
    cmd: 'heading6',
    tip: () => t('toolbar.heading6')
  },
  bulletedList: {
    name: 'bulletedList',
    icon: mdiFormatListBulleted,
    cmd: 'bulletedList',
    tip: () => t('toolbar.bulletedList')
  },
  numberedList: {
    name: 'numberedList',
    icon: mdiFormatListNumbered,
    cmd: 'numberedList',
    tip: () => t('toolbar.numberedList')
  },
  quote: {
    name: 'quote',
    icon: mdiFormatQuoteClose,
    cmd: 'quote',
    tip: () => t('toolbar.quote')
  },
  codeBlock: {
    name: 'codeBlock',
    icon: mdiCodeTags,
    cmd: 'codeBlock',
    tip: () => t('toolbar.codeBlock')
  },
  horizontalRule: {
    name: 'horizontalRule',
    icon: mdiMinus,
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
      const mode = getMode()
      const parts = mode.split('|')
      return parts.includes('viewer')
              ? mdiEyeOffOutline
              : mdiEyeOutline
    },
    exec: () => {
      const mode = getMode()
      const parts = mode.split('|')
      if (parts.includes('viewer')) {
        const nparts = parts.filter((item: string) => item !== 'viewer')
        const nmode = nparts.join('|')
        setMode(nmode)
      } else {
        const last = parts[parts.length - 1]
        const nmode = last === 'toc'
          ? 'editor|viewer|toc'
          : 'editor|viewer'
        setMode(nmode)
      }
    },
    tip: () => {
      const mode = getMode()
      const parts = mode.split('|')
      return parts.includes('viewer')
             ? t('toolbar.closePreview')
             : t('toolbar.openPreview')
    }
  },
  toc: {
    name: 'toc',
    icon: mdiTextBoxOutline,
    exec: () => {
      const mode = getMode()
      const parts = mode.split('|')
      const last = parts[parts.length - 1]
      const nparts = [...parts]
      if (last === 'toc') {
        nparts.pop()
      } else {
        nparts.push('toc')
      }
      const nmode = nparts.join('|')
      setMode(nmode)
    },
    tip: () => t('toolbar.toc')
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


    if (typeof (val as any).render === 'function') {
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
  border-bottom: 1px solid #e0e0e0;
}
.toolbar > button, .toolbar > div {
  flex-shrink: 0;
  flex-grow: 0;
}
.toolbar > .spacer {
  flex-shrink: 1;
  flex-grow: 1;
}
.toolbar > :deep(.el-button + .el-button) {
  margin-left: 0;
}
</style>
