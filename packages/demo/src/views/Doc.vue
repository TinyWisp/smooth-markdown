<template>
  <div class="doc-container">
    <markdown-editor v-model="doc" mode="view" :plugins="plugins"></markdown-editor>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { MarkdownEditor, addParentSelector } from '@smooth-vue-markdown-editor/core'
import { customCodeBlockRenderer, autoHeight, injectCss } from '@smooth-vue-markdown-editor/core/plugins'
import Demo from '../components/Demo.vue'
import md from '../docs/zh.md?raw'
import css from './theme.css?raw'
import demoMap from '../demos'

const doc = ref(md)
const plugins = [
  injectCss(addParentSelector(css, '&view')),
  autoHeight(),
  customCodeBlockRenderer({demo: [Demo, {demoMap}]})
]

</script>

<style scoped>
.doc-container {
  width: 100%;
  height: auto;
}
</style>