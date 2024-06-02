<template>
  <v-container style="max-width: 100%;">
    <v-row>
      <v-col
        v-for="plugin of plugins"
        :key="plugin.name"
        cols="4"
        md="4"
        class="cell"
      >
        <v-card hover :class="{'plugin-expand': plugin.expand}">
          <v-card-title>
            {{ plugin.name }}
            <v-switch v-model="plugin.enabled" color="primary" class="switch"></v-switch>
          </v-card-title>
          <v-card-subtitle>
            {{ plugin.desc }}
          </v-card-subtitle>
          <v-card-actions>
            <span class="code">{{ plugin.code }}</span>
            <v-spacer/>
            <v-btn
              v-if="plugin.setup"
              :icon="plugin.expand ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="plugin.expand = !plugin.expand"
            />
          </v-card-actions>
          <v-expand-transition v-if="plugin.setup">
            <div v-show="plugin.expand">
                <v-divider/>
                <v-card-text>
                  <component :is="plugin.setup" v-model="plugin.val" />
                </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {
  customCodeBlockRenderer,
  langZhCN,
  langEn,
  overlayScrollbars,
  affixToolbar,
  autoHeight,
  math,
  tocSpy,
  syncScrollbars,
  pasteImage,
  defaultEditorTheme,
  defaultViewerTheme,
  markdownItPlugins,
  markdownItOptions,
  customLinkAttrs,
  handleImageClick
} from '@smooth-markdown/core/plugins'
import { CodeMirrorRenderer, KatexRenderer, MermaidRenderer } from '@smooth-markdown/core/renderers'
import { watch } from 'vue'
import { defineExpose, defineEmits, onMounted, reactive } from 'vue'
import SyncScrollbarsSetup from './SyncScrollbarsSetup.vue'
import MarkdownItPluginsSetup from './MarkdownItPluginsSetup.vue'
import OverlayScrollbarsSetup from './OverlayScrollbarsSetup.vue'
import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import ins from 'markdown-it-ins'
import br  from 'markdown-it-br'
import mark from 'markdown-it-mark'
import deflist from 'markdown-it-deflist'
import taskLists from 'markdown-it-task-lists'
import footnote from 'markdown-it-footnote'
import mialert from 'markdown-it-alert'
import CustomCodeBlockRendererSetup from './CustomCodeBlockRendererSetup.vue'

const plugins = reactive([
  {
    name: 'langZhCN',
    code: 'langZhCN()',
    val: () => langZhCN(),
    desc: '中文支持',
    enabled: true
  },
  {
    name: 'langEn',
    code: 'langEn()',
    val: () => langEn(),
    desc: '英文支持',
    enabled: true
  },
  {
    name: 'overlayScrollbars',
    code: 'overlayScrollbars({...})',
    val: () => overlayScrollbars(),
    setup: OverlayScrollbarsSetup,
    desc: '滚动条',
    enabled: true,
    expand: false
  },
  {
    name: 'affixToolbar',
    code: 'affixToolbar()',
    val: () => affixToolbar(),
    desc: '固定工具栏',
    enabled: true
  },
  {
    name: 'autoHeight',
    code: 'autoHeight()',
    val: () => autoHeight(),
    desc: '自动高度',
    enabled: false
  },
  {
    name: 'math',
    code: 'math()',
    val: () => math(),
    desc: '公式',
    enabled: true
  },
  {
    name: 'tocSpy',
    code: 'tocSpy()',
    val: () => tocSpy(),
    desc: 'table of contents',
    enabled: true
  },
  {
    name: 'syncScrollbars',
    code: 'syncScrollbars(...)',
    val: () => syncScrollbars(),
    desc: 'sync the scrollbars',
    setup: SyncScrollbarsSetup,
    enabled: true,
    expand: false
  },
  {
    name: 'defaultEditorTheme',
    code: 'defaultEditorTheme()',
    val: () => defaultEditorTheme(),
    desc: "the default theme of the editor",
    enabled: true
  },
  {
    name: 'defaultViewerTheme',
    code: 'defaultViewerTheme()',
    val: () => defaultViewerTheme(),
    desc: "the default theme of the viewer",
    enabled: true
  },
  {
    name: 'customCodeBlockRenderer',
    code: 'customCodeBlockRenderer()',
    val: () => customCodeBlockRenderer({
      math: [KatexRenderer],
      mermaid: [MermaidRenderer],
      javascript: [CodeMirrorRenderer]
    }),
    desc: "custom code block renderers",
    setup: CustomCodeBlockRendererSetup,
    enabled: true
  },
  {
    name: 'pasteImage',
    code: 'pasteImage(fnUpload)',
    val: () => pasteImage((file) => {
      return URL.createObjectURL(file)
    }),
    desc: 'uploading ',
    enabled: true
  },
  {
    name: 'markdownItPlugins',
    code: 'markdownItPlugins([...])',
    val: () => markdownItPlugins([
      [sup], 
      [sub], 
      [ins], 
      [br], 
      [mark], 
      [deflist], 
      [taskLists], 
      [footnote], 
      [mialert] 
    ]),
    desc: 'loading markdown-it plugins',
    setup: MarkdownItPluginsSetup,
    enabled: true
  },
  {
    name: 'markdownItOptions',
    code: 'markdownItOptions({...})',
    val: () => markdownItOptions({}),
    desc: 'setting markdown-it options',
    enabled: true
  },
  {
    name: 'handleImageClick',
    code: 'handleImageClick(...)',
    val: () => handleImageClick((imgs, idx) => {
      alert(`images: ${imgs.join(',')}.  the image you clicked: ${idx}`)
    }),
    desc: 'handleImageClick',
    enabled: true
  },
  {
    name: 'customLinkAttrs',
    code: 'customLinkAttrs(...)',
    val: () => customLinkAttrs((attrs) => {
      attrs.target = '_blank'
      attrs.onclick = `javascript:alert('you are jumping to ${attrs.href}')`

      return attrs
    }),
    enabled: true
  }
])

function getPlugins() {
  const items = []
  plugins.forEach((plugin) => {
    if (plugin.enabled) {
      if (typeof plugin.val === 'function') {
        items.push(plugin.val())
      }
    }
  })

  return items
}

const emit = defineEmits(['changed'])

onMounted(() => {
  watch(plugins, () => {
    emit('changed')
  }, { immediate: true, deep: true})
})

defineExpose({ getPlugins })
</script>

<style scoped>
.code, :deep(.code) {
  display: inline-block;
  background-color: lightgray;
  line-height: 1.5;
  color: steelblue;
  border-radius: 2px;
  padding: 0 10px;
}
.switch {
  position: absolute;
  right: 10px;
  top: 5px;
}
.cell {
  height: 180px;
  overflow: visible;
}
.plugin-expand {
  z-index: 999999;
}
</style>