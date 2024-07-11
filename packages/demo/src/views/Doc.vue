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
import { 
  customCodeBlockRenderer,
  defaultViewerTheme,
  markdownItPlugins,
  overlayScrollbars,
  customLinkAttrs,
  tocSpy,
  langEn,
  langZhCN,
  injectCss
} from '@smooth-markdown/core/plugins'
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
  }),
  langEn(),
  langZhCN(),
  injectCss(`
      &viewer table td[rowspan="2"],
      &viewer table td[rowspan="3"],
      &viewer table td[rowspan="4"],
      &viewer table td[rowspan="5"],
      &viewer table td[rowspan="6"],
      &viewer table td[rowspan="7"],
      &viewer table td[rowspan="8"],
      &viewer table td[rowspan="9"],
      &viewer table td[rowspan="10"],
      &viewer table td[rowspan="11"],
      &viewer table td[rowspan="12"]
      { border-top: 1px solid lightgray;}
      &viewer table td[rowspan="2"]~td,
      &viewer table td[rowspan="3"]~td,
      &viewer table td[rowspan="4"]~td,
      &viewer table td[rowspan="5"]~td,
      &viewer table td[rowspan="6"]~td,
      &viewer table td[rowspan="7"]~td,
      &viewer table td[rowspan="8"]~td,
      &viewer table td[rowspan="9"]~td,
      &viewer table td[rowspan="10"]~td,
      &viewer table td[rowspan="11"]~td,
      &viewer table td[rowspan="12"]~td
      { border-top: 1px solid lightgray;}
    `
  )
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
  width: 100%;
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