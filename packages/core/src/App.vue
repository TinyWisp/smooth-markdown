<template>
  <smooth-markdown v-model="doc" mode="editor|viewer|toc" :plugins="plugins"></smooth-markdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import tocSpy from './plugins/TocSpyPlugin'
import overlayScrollbars  from './plugins/OverlayScrollbarsPlugin';
import syncScrollbar from './plugins/SyncScrollbarPlugin';
import SmoothMarkdown from './core/SmoothMarkdown.vue'
const doc = ref('')
const plugins = [overlayScrollbars(), syncScrollbar()]

</script>

<style scoped>
</style>