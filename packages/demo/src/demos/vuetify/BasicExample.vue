<template>
  <smooth-markdown v-model="doc" mode="both">
    <template v-slot:toolbar>
      <vuetify-toolbar color="white"></vuetify-toolbar>
      <v-divider></v-divider>
    </template>
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'
import { watch } from 'vue'

const doc = ref('')

watch(doc, () => {
  console.log(doc.value)
})

</script>