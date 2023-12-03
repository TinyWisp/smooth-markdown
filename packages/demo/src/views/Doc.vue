<template>
  <div class="doc-container">
    <markdown-editor v-model="doc" mode="view" :plugins="plugins"></markdown-editor>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { MarkdownEditor } from '@smooth-vue-markdown-editor/core'
import { customCodeBlockRenderer } from '@smooth-vue-markdown-editor/core/plugins'
import Demo from '../components/Demo.vue'
import md from '../doc/en/plugins.md?raw'
import demoMap from '../demos'

const doc = ref(md)
const plugins = [
  customCodeBlockRenderer({demo: [Demo, {demoMap}]})
]

</script>

<style scoped>
.doc-container {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
</style>