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
import { perfectScrollbar } from '@smooth-vue-markdown-editor/core/plugins'
import VuetifyToolbar from '@smooth-vue-markdown-editor/vuetify-toolbar'
import cnt from './jane eyre.txt?raw'

console.log('++++++++++')
console.log(typeof cnt)

const doc = ref(cnt)
const plugins = [perfectScrollbar({})]
</script>
