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
import { overlayScrollbars, injectCss, syncScrollbars } from '@smooth-markdown/core/plugins'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'
import { sample as cnt } from '@/docs'

const doc = ref(cnt)
const plugins = [
  syncScrollbars(),
  overlayScrollbars({}),
  injectCss(`
    &root .os-scrollbar {
      transition: width 0.2s, opacity 0.2s, visibility 0.2s;
      --os-handle-bg: steelblue;
      --os-handle-bg-hover: steelblue;
      --os-handle-bg-active: steelblue;
    }
    &root .os-scrollbar:hover {
      --os-size: 15px;
      background-color: #f0f0f0;
      opacity: 0.9;
    }
  `)
]
</script>
