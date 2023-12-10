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

const doc = ref(`\`\`\`art-text
GRAPH
\`\`\`

\`\`\`echarts
{
	"xAxis": {
		"type": "category",
		"data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
	},
	"yAxis": {
		"type": "value"
	},
	"series": [{
		"data": [130, 200, 150, 80, 70, 110, 130],
		"type": "bar"
	}]
}
\`\`\`
`)
const plugins = [ customCodeBlockRenderer({
  echarts: [Echarts],
  'art-text': [ArtText, {color: 'red'}]
}) ]
</script>

<style scoped>
</style>