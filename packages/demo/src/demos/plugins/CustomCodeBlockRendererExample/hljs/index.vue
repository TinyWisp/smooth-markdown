<template>
  <smooth-markdown v-model="doc" :plugins="plugins">
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown, addParentSelector } from '@smooth-markdown/core'
import { customCodeBlockRenderer, injectCss } from '@smooth-markdown/core/plugins'
import { HljsFurnishedRenderer, hljsAsyncGetLangDef } from '@smooth-markdown/core/renderers'
import vsTheme from 'highlight.js/styles/vs2015.css?raw'
import cnt from './cnt.md?raw'

const doc = ref(cnt)
const plugins = [
  injectCss(addParentSelector(vsTheme, '&viewer')),
  injectCss(`
    &viewer .os-scrollbar {
      transition: width 0.2s, height 0.2s, opacity 0.2s, visibility 0.2s;
      --os-handle-bg: steelblue;
      --os-handle-bg-hover: steelblue;
      --os-handle-bg-active: steelblue;
    }
    &viewer .os-scrollbar:hover {
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