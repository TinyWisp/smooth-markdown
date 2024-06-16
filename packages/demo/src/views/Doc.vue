<template>
  <div class="doc-container">
    <smooth-markdown
      v-model="doc"
      mode="viewer|toc"
      :plugins="plugins"
      ref="sm"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, shallowRef } from 'vue'
import type { Ref, ShallowRef } from 'vue'
import { SmoothMarkdown, SimpleToc, type Context, type FnGetContext } from '@smooth-markdown/core'
import { customCodeBlockRenderer, defaultViewerTheme, markdownItPlugins, overlayScrollbars, customLinkAttrs, tocSpy } from '@smooth-markdown/core/plugins'
import { CodeMirrorRenderer } from '@smooth-markdown/core/renderers'
import mditMultimdTable from 'markdown-it-multimd-table'
import mditBr from 'markdown-it-br'
import IframeRenderer from '../components/IframeRenderer.vue'
import { manual } from '@/docs'
import { onMounted } from 'vue'

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
const sm: Ref<InstanceType<typeof SmoothMarkdown> | null> = ref(null)

function delay(ms: number) {
  return new Promise(res => setTimeout(res, ms))
} 

function recalcTocPositions() {
  if (sm.value) {
    const context = sm.value.getContext()
    context.toc.recalc()
  }
}

onMounted(async () => {
  for (let i=0; i<20; i++) {
    await delay(500);
    recalcTocPositions()
  }
});
</script>

<style scoped>
.doc-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>

<style>
.sm-view {
  padding: 10px;
  text-wrap: wrap;
}
</style>