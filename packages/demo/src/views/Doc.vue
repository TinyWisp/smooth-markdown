<template>
  <div class="doc-container">
    <smooth-markdown v-model="doc" mode="viewer" :plugins="plugins"></smooth-markdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SmoothMarkdown, addParentSelector } from '@smooth-markdown/core'
import { customCodeBlockRenderer, autoHeight, injectCss } from '@smooth-markdown/core/plugins'
import IframeRenderer from '../components/IframeRenderer.vue'
import md from '../docs/zh.md?raw'
import css from './theme.css?raw'

const doc = ref(md)
const plugins = [
  injectCss(addParentSelector(css, '&viewer')),
  injectCss(`&viewer {padding: 10px; text-wrap: wrap;}`),
  autoHeight(),
  customCodeBlockRenderer({iframe: [IframeRenderer]})
]

</script>

<style scoped>
.doc-container {
  width: 100%;
  height: auto;
}
</style>

<style>
.sm-view {
  padding: 10px;
  text-wrap: wrap;
}
</style>