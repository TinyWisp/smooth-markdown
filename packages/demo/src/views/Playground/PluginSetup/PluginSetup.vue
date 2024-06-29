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
        <v-card
          hover
          :class="{'plugin-expand': plugin.expand}"
          @mouseenter="plugin.expand=true"
          @mouseleave="plugin.expand=false"
        >
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
          <div v-if="plugin.setup && plugin.expand">
              <v-divider/>
              <v-card-text>
                <component :is="plugin.setup" v-model="plugin.val" />
              </v-card-text>
          </div>
          <div v-else-if="plugin.tip && plugin.expand">
              <v-divider/>
              <v-card-text>
                <pre>{{ plugin.tip }}</pre>
              </v-card-text>
          </div>
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
  lang,
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
  handleImageClick,
codemirrorExt
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
import { EditorView, lineNumbers, highlightActiveLine, highlightActiveLineGutter } from '@codemirror/view'
import { foldGutter } from '@codemirror/language'
import CodeMirrorExtSetup from './CodeMirrorExtSetup.vue'
import { t } from '@/docs'

const plugins = reactive([
  {
    name: 'langZhCN',
    code: 'langZhCN()',
    val: () => langZhCN(),
    desc: t('playground.langZhCN'),
    enabled: true
  },
  {
    name: 'langEn',
    code: 'langEn()',
    val: () => langEn(),
    desc: t('playground.langEn'),
    enabled: true
  },
  {
    name: 'lang',
    code: 'lang({...})',
    val: () => lang(),
    desc: t('playground.lang'),
    enabled: false,
  },
  {
    name: 'overlayScrollbars',
    code: 'overlayScrollbars({...})',
    val: () => overlayScrollbars(),
    setup: OverlayScrollbarsSetup,
    desc: t('playground.overlayScrollbars'),
    enabled: true,
    expand: false
  },
  {
    name: 'affixToolbar',
    code: 'affixToolbar()',
    val: () => affixToolbar(),
    desc: t('playground.affixToolbar'),
    enabled: true
  },
  {
    name: 'autoHeight',
    code: 'autoHeight()',
    val: () => autoHeight(),
    desc: t('playground.affixToolbar'),
    enabled: false
  },
  {
    name: 'math',
    code: 'math()',
    val: () => math(),
    desc: t('playground.math'),
    enabled: true
  },
  {
    name: 'tocSpy',
    code: 'tocSpy()',
    val: () => tocSpy(),
    desc: t('playground.tocSpy'),
    enabled: true
  },
  {
    name: 'syncScrollbars',
    code: 'syncScrollbars(...)',
    val: () => syncScrollbars(),
    desc: t('playground.syncScrollbars'),
    setup: SyncScrollbarsSetup,
    enabled: true,
    expand: false
  },
  {
    name: 'defaultEditorTheme',
    code: 'defaultEditorTheme()',
    val: () => defaultEditorTheme(),
    desc: t('playground.defaultEditorTheme'),
    enabled: true
  },
  {
    name: 'defaultViewerTheme',
    code: 'defaultViewerTheme()',
    val: () => defaultViewerTheme(),
    desc: t('playground.defaultViewerTheme'),
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
    desc: t('playground.customCodeBlockRenderer'),
    setup: CustomCodeBlockRendererSetup,
    enabled: true
  },
  {
    name: 'pasteImage',
    code: 'pasteImage(fnUpload)',
    val: () => pasteImage((file) => {
      return URL.createObjectURL(file)
    }),
    desc: t('playground.pasteImage'),
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
    desc: t('playground.markdownItPlugins'),
    setup: MarkdownItPluginsSetup,
    enabled: true
  },
  {
    name: 'markdownItOptions',
    code: 'markdownItOptions({...})',
    val: () => markdownItOptions({}),
    desc: t('playground.markdownItOptions'),
    enabled: true
  },
  {
    name: 'codemirrorExt',
    code: 'codemirrorExt({...})',
    val: () => codemirrorExt([
      EditorView.lineWrapping,
      lineNumbers(),
      highlightActiveLine(),
      highlightActiveLineGutter(),
      foldGutter()
    ]),
    desc: t('playground.codemirrorExt'),
    setup: CodeMirrorExtSetup,
    enabled: true
  },
  {
    name: 'handleImageClick',
    code: 'handleImageClick(...)',
    tip: "handleImageClick((imgs, idx) => {\n"
      + "  alert(`images: [${imgs.map(item => item.src).join(',')}].\nthe index of the image you clicked: ${idx}`)\n"
      + "})",
    val: () => handleImageClick((imgs, idx) => {
      alert(`images: [${imgs.map(item => item.src).join(',')}].\nthe index of the image you clicked: ${idx}`)
    }),
    desc: t('playground.handleImageClick'),
    enabled: true
  },
  {
    name: 'customLinkAttrs',
    code: 'customLinkAttrs(...)',
    tip: "customLinkAttrs((attrs) => {\n"
      + "  attrs.target = '_blank'\n"
      + "  attrs.onclick = `javascript:alert('you are jumping to ${attrs.href}')`\n"
      + "  return attrs\n"
      + "})",
    val: () => customLinkAttrs((attrs) => {
      attrs.target = '_blank'
      attrs.onclick = `javascript:alert('you are jumping to ${attrs.href}')`

      return attrs
    }),
    desc: t('playground.customLinkAttrs'),
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
.tip {
  display: none;
}
.cell:hover .tip {
  display: block;
}
.plugin-expand {
  z-index: 999999;
}
</style>