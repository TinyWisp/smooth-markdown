<template>
  <div class="container">
    <smooth-markdown v-model="doc" v-model:mode="mode" :plugins="plugins">
      <template v-slot:toolbar>
        <vuetify-toolbar></vuetify-toolbar>
      </template>
    </smooth-markdown>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { langEn } from '@smooth-markdown/core/plugins'
import { classicSetup } from '@smooth-markdown/presets'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'

const doc = ref('')
const mode = ref('editor|viewer')
const plugins = [
  ...classicSetup,
  langEn()
]
</script>

<style scoped>
.container {
  width: 600px;
  height: 300px;
}
</style>