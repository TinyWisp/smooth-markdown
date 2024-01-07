<template>
  <smooth-markdown v-model="doc" :plugins="plugins">
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { customCodeBlockRenderer } from '@smooth-markdown/core/plugins'
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