<template>
  <div class="doc-container">
    <smooth-markdown v-model="doc" mode="toc|viewer" :plugins="plugins"></smooth-markdown>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { SmoothMarkdown, addParentSelector } from '@smooth-markdown/core'
import { customCodeBlockRenderer, autoHeight, overlayScrollbars, injectCss, tocSpy } from '@smooth-markdown/core/plugins'
import { CodeMirrorRenderer } from '@smooth-markdown/core/renderers'
import IframeRenderer from '../components/IframeRenderer.vue'
import md from '../docs/zh.md?raw'
import css from './theme.css?raw'

const doc = ref(md)
const plugins = [
  injectCss(addParentSelector(css, '&viewer')),
  injectCss(`&viewer {padding: 10px; text-wrap: wrap;}`),
  tocSpy(),
  overlayScrollbars(),
  customCodeBlockRenderer({
    iframe: [IframeRenderer],
    default: [CodeMirrorRenderer]
  })
]

</script>

<style scoped>
.doc-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>

<style>
.sm-view {
  padding: 10px;
  text-wrap: wrap;
}
</style>