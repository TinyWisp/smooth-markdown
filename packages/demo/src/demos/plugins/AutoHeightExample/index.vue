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
import { autoHeight } from '@smooth-markdown/core/plugins'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'
import cnt from './jane eyre.txt?raw'

const doc = ref(cnt)
const plugins = [autoHeight()]
</script>
