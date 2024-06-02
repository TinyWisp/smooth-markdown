<template>
  <div class="doc-container">
    <smooth-markdown
      v-model="doc"
      mode="viewer|toc"
      :plugins="plugins">
    </smooth-markdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { customCodeBlockRenderer, defaultViewerTheme, markdownItPlugins, overlayScrollbars, customLinkAttrs, tocSpy } from '@smooth-markdown/core/plugins'
import { CodeMirrorRenderer } from '@smooth-markdown/core/renderers'
import mditMultimdTable from 'markdown-it-multimd-table'
import mditBr from 'markdown-it-br'
import IframeRenderer from '../components/IframeRenderer.vue'
import manual from '../docs/manual.zh.md?raw'

const doc = ref(manual)
const plugins = [
  defaultViewerTheme(),
  tocSpy(),
  overlayScrollbars(),
  customCodeBlockRenderer({
    iframe: [IframeRenderer],
    default: [CodeMirrorRenderer]
  }),
  markdownItPlugins([
    [mditMultimdTable, { rowspan: true }],
    [mditBr]
  ]),
  customLinkAttrs((attrs) => {
    attrs.target = '_blank'
    return attrs
  })
]

</script>

<style scoped>
.doc-container {
  width: 1400px;
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>

<style>
.sm-view {
  padding: 10px;
  text-wrap: wrap;
}
</style>