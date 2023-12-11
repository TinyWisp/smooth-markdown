<template>
  <markdown-editor v-model="doc" mode="both" :plugins="plugins" id="mytest">
    <template v-slot:toolbar>
      <vuetify-toolbar color="white"></vuetify-toolbar>
      <v-divider></v-divider>
    </template>
  </markdown-editor>
</template>

<script setup>
import { ref } from 'vue'
import { MarkdownEditor } from '@smooth-vue-markdown-editor/core'
import { affixToolbar } from '@smooth-vue-markdown-editor/core/plugins'
import VuetifyToolbar from '@smooth-vue-markdown-editor/vuetify-toolbar'

const editor = ref(null)
const doc = ref('')
const plugins = [affixToolbar({
  relativeElementSelector: '#mytest',
  offset: {
    top: 0,
    bottom: 0
  },
  style: {
    width: '100%'
  }
})]
</script>
