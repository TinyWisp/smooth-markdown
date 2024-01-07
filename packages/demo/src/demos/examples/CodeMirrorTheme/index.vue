<template>
  <smooth-markdown v-model="doc" :plugins="plugins">
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { codemirrorExt } from '@smooth-markdown/core/plugins'
import { vscodeDark} from '@uiw/codemirror-theme-vscode'
import cnt from './cnt.md?raw'

const doc = ref(cnt)
const plugins = [codemirrorExt(vscodeDark)]
</script>
