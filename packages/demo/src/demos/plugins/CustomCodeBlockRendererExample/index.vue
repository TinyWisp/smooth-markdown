<template>
  <markdown-editor v-model="doc" mode="both" :plugins="plugins">
  </markdown-editor>
</template>

<script setup>
import { ref } from 'vue'
import { MarkdownEditor } from '@smooth-vue-markdown-editor/core'
import { customCodeBlockRenderer } from '@smooth-vue-markdown-editor/core/plugins'
import Echarts from './Echarts.vue'
import ArtText from './ArtText.jsx'
import cnt from './cnt.md?raw'

const doc = ref(cnt)
const plugins = [
	customCodeBlockRenderer({
		echarts: [Echarts],
		'art-text': [ArtText, {color: 'red'}]
	})
]
</script>

<style scoped>
</style>