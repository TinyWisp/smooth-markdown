<template>
  <markdown-editor v-model="doc" mode="both" :plugins="plugins">
    <template v-slot:toolbar>
      <vuetify-toolbar color="white"></vuetify-toolbar>
      <v-divider></v-divider>
    </template>
  </markdown-editor>
</template>

<script setup>
import { ref } from 'vue'
import { MarkdownEditor } from '@smooth-vue-markdown-editor/core'
import { overlayScrollbars, injectCss } from '@smooth-vue-markdown-editor/core/plugins'
import VuetifyToolbar from '@smooth-vue-markdown-editor/vuetify-toolbar'
import cnt from './jane eyre.txt?raw'

const doc = ref(cnt)
const plugins = [
  overlayScrollbars({}),
  injectCss(`
    & .os-scrollbar {
      transition: width 0.2s, opacity 0.2s, visibility 0.2s;
      --os-handle-bg: steelblue;
      --os-handle-bg-hover: steelblue;
      --os-handle-bg-active: steelblue;
    }
    & .os-scrollbar:hover {
      --os-size: 15px;
      background-color: #f0f0f0;
      opacity: 0.9;
    }
  `)
]
</script>
