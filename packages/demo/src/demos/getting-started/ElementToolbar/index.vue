<template>
  <smooth-markdown v-model="doc" :plugins="plugins">
    <template v-slot:toolbar>
      <element-toolbar color="white"></element-toolbar>
      <v-divider></v-divider>
    </template>
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { langEn } from '@smooth-markdown/core/plugins'
import { classicSetup } from '@smooth-markdown/presets'
import ElementToolbar from '@smooth-markdown/element-toolbar'
import cnt from '@/utils/sample'

const doc = ref(cnt)
const plugins = [
  ...classicSetup,
  langEn()
]
</script>
