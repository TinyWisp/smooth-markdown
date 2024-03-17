<template>
  <smooth-markdown
    v-model="doc"
    :plugins="plugins"
    :mode="mode"
    :readonly="readonly"
  >
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { customCodeBlockRenderer } from '@smooth-markdown/core/plugins'
import cnt from './cnt.md?raw'


const modes = ['editor|viewer|toc', 'editor|viewer', 'toc|viewer', 'viewer|toc', 'viewer', 'editor']
const langs = ['zh_CN', 'en']

const doc = ref(cnt)
const mode = ref('editor|viewer|toc')
const readonly = ref(false)
const plugins = [
	customCodeBlockRenderer({
	})
]
</script>

<style scoped>
</style>