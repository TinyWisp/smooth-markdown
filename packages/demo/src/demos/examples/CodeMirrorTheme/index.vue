<template>
  <markdown-editor v-model="doc" mode="both" :plugins="plugins">
  </markdown-editor>
</template>

<script setup>
import { ref } from 'vue'
import { MarkdownEditor } from '@smooth-vue-markdown-editor/core'
import { codemirrorExt } from '@smooth-vue-markdown-editor/core/plugins'
import { vscodeDark} from '@uiw/codemirror-theme-vscode'
import cnt from './cnt.md?raw'

const doc = ref(cnt)
const plugins = [codemirrorExt(vscodeDark)]
</script>
