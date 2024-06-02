<template>
  <smooth-markdown v-model="doc" :plugins="plugins">
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { autoHeight } from '@smooth-markdown/core/plugins'
import cnt from '@/utils/sample'

const doc = ref(cnt)
const plugins = [autoHeight()]
</script>
