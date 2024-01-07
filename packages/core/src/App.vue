<template>
  <smooth-markdown v-model="doc" mode="editor|viewer|toc"></smooth-markdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SmoothMarkdown from './core/SmoothMarkdown.vue'
const doc = ref('')
</script>

<style scoped>
</style>