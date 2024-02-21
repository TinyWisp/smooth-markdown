<template>
  <smooth-markdown v-model="doc" mode="editor|viewer|toc" :plugins="plugins"></smooth-markdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import tocSpy from './plugins/TocSpyPlugin'
import overlayScrollbars  from './plugins/OverlayScrollbarsPlugin';
import syncScrollbar from './plugins/SyncScrollbarPlugin';
import customCodeBlockRenderer from './plugins/CustomCodeBlockRendererPlugin';
import SmoothMarkdown from './core/SmoothMarkdown.vue'
import CodeMirrorRenderer from './renderers/CodeMirrorRenderer/BasicCodeMirrorRenderer.vue';
const doc = ref('')
const plugins = [overlayScrollbars(), syncScrollbar(), tocSpy(), customCodeBlockRenderer({
  default: [CodeMirrorRenderer]
})]

</script>

<style scoped>
</style>./plugins/CustomCodeBlockRendererPlugin/CustomCodeBlockRendererPlugin