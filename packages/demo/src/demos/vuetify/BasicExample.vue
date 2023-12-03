<template>
  <markdown-editor v-model="doc" mode="both">
    <template v-slot:toolbar>
      <vuetify-toolbar color="white"></vuetify-toolbar>
      <v-divider></v-divider>
    </template>
  </markdown-editor>
</template>

<script setup>
import { ref } from 'vue'
import { MarkdownEditor } from '@smooth-vue-markdown-editor/core'
import VuetifyToolbar from '@smooth-vue-markdown-editor/vuetify-toolbar'
import { watch } from 'vue'

const doc = ref('')

watch(doc, () => {
  console.log(doc.value)
})

</script>