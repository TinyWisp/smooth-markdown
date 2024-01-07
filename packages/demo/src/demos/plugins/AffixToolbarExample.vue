<template>
  <smooth-markdown v-model="doc" :plugins="plugins">
    <template v-slot:toolbar>
      <vuetify-toolbar color="white"></vuetify-toolbar>
      <v-divider></v-divider>
    </template>
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { affixToolbar } from '@smooth-markdown/core/plugins'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'

const editor = ref(null)
const doc = ref('')
const plugins = [affixToolbar({
  offset: {
    top: 0,
    bottom: 0
  },
  style: {
    width: '100%'
  }
})]
</script>
