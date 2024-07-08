<template>
  <smooth-markdown v-model="doc" :plugins="plugins">
    <template v-slot:toolbar>
      <vuetify-toolbar></vuetify-toolbar>
    </template>
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { highlightCodeBlockInEditableArea } from '@smooth-markdown/core/plugins'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'
import { sample as cnt } from '@/docs'

const doc = ref(cnt)
const plugins = [
  highlightCodeBlockInEditableArea()
]
</script>
