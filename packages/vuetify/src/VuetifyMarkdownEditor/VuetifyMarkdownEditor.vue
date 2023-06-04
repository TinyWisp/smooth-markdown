<template>
  <core-editor
    :mode="mode"
    :modelValue="modelValue"
    height="30em"
    ref="theCoreEditor"
    @update:modelValue="(val: string) => $emit('update:modelValue', val)"
    @update:mode="(val: string) => $emit('update:mode', val)"
  >
    <template v-slot:toolbar>
      <v-toolbar density="compact" class="svme-toolbar">
        <template v-for="(item, idx) of calcToolbarItems" :key="item.name + idx">
          <!-- divider -->
          <v-divider
            class="vertical-divider mx-2"
            vertical
            v-if="item.name === 'divider'"/>

          <!-- spacer -->
          <v-spacer v-else-if="item.name === 'spacer'"/>

          <!-- -->
          <VNodeRenderer :vnode="item.render()" v-else-if="item.render" />

          <!-- button -->
          <v-btn
            size="small"
            variant="flat"
            color="white"
            class="svme-toolbar-button"
            :key="item.name"
            @click="clickToolbarButton(item)"
            v-else>
            <v-icon small color="grey darken-1" :icon="typeof item.icon === 'function' ? item.icon() : item.icon"></v-icon>
            <v-tooltip location="bottom" activator="parent">{{ typeof item.tip === 'function' ? item.tip() : $t(`svme.toolbar.${item.name}`)}}</v-tooltip>
          </v-btn>

        </template>
      </v-toolbar>

      <v-divider></v-divider>

    </template>
  </core-editor>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { CoreEditor } from '@smooth-vue-markdown-editor/core'
import type { ToolbarItemMap, ToolbarItem, VuetifyContext, Mode } from './types'
import { useI18n } from 'vue-i18n'
import { VuetifyPluginManager, type VuetifyPlugin } from '@/plugins/VuetifyPlugin'
import VNodeRenderer from './VNodeRenderer.vue'
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

export interface VuetifyMarkdownEditorProps {
  modelValue: string
  mode: Mode
  height?: string
  toolbarItems?: string[]
  plugins?: VuetifyPlugin[]
}

const props = withDefaults(defineProps<VuetifyMarkdownEditorProps>(), {
  modelValue: '',
  mode: 'both',
  height: '30em',
  toolbarItems: () => ['undo', 'redo', 'divider', 
    'bold', 'italic', 'strike', 'underline', 'subscript', 'superscript', 'mark', 'heading1', 'heading2', 'heading3', 'divider',
    'bulletedList', 'numberedList', 'quote', 'codeBlock', 'link', 'image', 'horizontalRule', 'table',
    'spacer',
    'preview'
  ],
  plugins: () => [],
})

const { t } = useI18n()
const emit = defineEmits(['update:modelValue', 'update:mode'])
const theCoreEditor = ref<InstanceType<typeof CoreEditor> | null>(null)
const pluginManager = new VuetifyPluginManager()
pluginManager.registerPlugins(props.plugins)
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
      return props.mode === 'both'
              ? mdiEyeOffOutline
              : mdiEyeOutline
    },
    exec: () => {
      emit('update:mode', props.mode === 'both' ? 'edit' : 'both')
    },
    tip: () => {
      return props.mode === 'both'
             ? t('svme.toolbar.closePreview')
             : t('svme.toolbar.openPreview')
    }
  },
  ...pluginManager.getToolbarItemMap()
}
const calcToolbarItems = computed<ToolbarItem[]>(() => {
  const items: ToolbarItem[] = []
  props.toolbarItems!.forEach((val: (ToolbarItem | string)) => {
    if (typeof val === 'string' && !toolbarItemMap[val]) {
      console.error(`invalid toolbar item: ${val}`)
      return
    }

    if (typeof val === 'string' && toolbarItemMap[val]) {
      items.push(toolbarItemMap[val])
      return
    }

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

function command(cmd: string, params?: object): void {
  theCoreEditor.value!.command(cmd, params)
}

function insertOrReplace(text: string, forceNewLine: boolean = false): void {
  theCoreEditor.value!.insertOrReplace(text, forceNewLine)
}

function getContext(): VuetifyContext {
  const context = {
    methods: {
      command,
      insertOrReplace,
    },
    refs: {
      coreEditor: theCoreEditor,
    },
    props,
  }

  return context
}

defineExpose({command, insertOrReplace, getContext})
provide('getVuetifyContext', getContext)

</script>

<style scoped>
.svme-toolbar {
  background-color: white;
}
</style>