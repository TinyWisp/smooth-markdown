<template>
  <markdown-editor v-model="doc" mode="both" :plugins="plugins">
  </markdown-editor>
</template>

<script setup>
import { ref } from 'vue'
import { MarkdownEditor, addParentSelector } from '@smooth-vue-markdown-editor/core'
import { customCodeBlockRenderer, injectCss } from '@smooth-vue-markdown-editor/core/plugins'
import { HljsFurnishedRenderer, hljsAsyncGetLangDef } from '@smooth-vue-markdown-editor/core/renderers'
import vsTheme from 'highlight.js/styles/vs2015.css?raw'
import cnt from './cnt.md?raw'

const doc = ref(cnt)
const plugins = [
  injectCss(addParentSelector(vsTheme, '&view')),
  injectCss(`
    &view .os-scrollbar {
      transition: width 0.2s, height 0.2s, opacity 0.2s, visibility 0.2s;
      --os-handle-bg: steelblue;
      --os-handle-bg-hover: steelblue;
      --os-handle-bg-active: steelblue;
    }
    &view .os-scrollbar:hover {
      --os-size: 15px;
      opacity: 0.9;
    }
  `),
  customCodeBlockRenderer({
    default: [HljsFurnishedRenderer, {
      fnGetLangDef: hljsAsyncGetLangDef,
      style: {
        maxHeight: '300px',
        width: '95%',
        marginBottom: '14px'
      }
    }]
  })
]
</script>

<style scoped>
</style>