const o=`<template>
  <smooth-markdown v-model="doc" v-model:mode="mode" :plugins="plugins">
    <template v-slot:toolbar>
      <vuetify-toolbar color="white"></vuetify-toolbar>
      <v-divider></v-divider>
    </template>
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { langEn, markdownItPlugins } from '@smooth-markdown/core/plugins'
import { classicSetup } from '@smooth-markdown/presets'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'
import mditMultimdTable from 'markdown-it-multimd-table'
import cnt from './cnt.md?raw'

const doc = ref(cnt)
const mode = ref('editor|viewer')
const plugins = [
  ...classicSetup,
  langEn(),
  markdownItPlugins([
    [mditMultimdTable]
  ])
]
<\/script>`;export{o as default};
