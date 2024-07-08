const o=`<template>
  <smooth-markdown v-model="doc" v-model:mode="mode" :plugins="plugins">
    <template v-slot:toolbar>
      <vuetify-toolbar></vuetify-toolbar>
    </template>
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { langEn } from '@smooth-markdown/core/plugins'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'
import { sample as cnt } from '@/docs'
import mySetup from './mySetup.js'

const doc = ref(cnt)
const mode = ref('editor|viewer')
const plugins = [
  ...mySetup,
  langEn(),
]
<\/script>`;export{o as default};
