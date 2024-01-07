<template>
  <smooth-markdown v-model="doc" :plugins="plugins">
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown, addParentSelector } from '@smooth-markdown/core'
import { injectCss } from '@smooth-markdown/core/plugins'
import css from './theme.css?raw'
import cnt from './cnt.md?raw'

const doc = ref(cnt)
const plugins = [
  injectCss(addParentSelector(css, '&viewer'))
]
</script>
