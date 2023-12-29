<template>
  <markdown-editor v-model="doc" mode="both" :plugins="plugins">
  </markdown-editor>
</template>

<script setup>
import { ref } from 'vue'
import { MarkdownEditor, addParentSelector } from '@smooth-vue-markdown-editor/core'
import { injectCss } from '@smooth-vue-markdown-editor/core/plugins'
import css from './theme.css?raw'
import cnt from './cnt.md?raw'

const doc = ref(cnt)
const plugins = [
  injectCss(addParentSelector(css, '&view'))
]
</script>
