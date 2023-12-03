<template>
  <markdown-editor v-model="doc" mode="both" :plugins="plugins">
    <template v-slot:toolbar>
      <vuetify-toolbar color="white"></vuetify-toolbar>
      <v-divider></v-divider>
    </template>
  </markdown-editor>
</template>

<script lang="jsx" setup>
import { ref } from 'vue'
import { MarkdownEditor } from '@smooth-vue-markdown-editor/core'
import { toolbarWrapper } from '@smooth-vue-markdown-editor/core/plugins'
import VuetifyToolbar from '@smooth-vue-markdown-editor/vuetify-toolbar'
import { watch } from 'vue'
import TestWrapper from './TestWrapper.vue';

const plugins = [ toolbarWrapper([TestWrapper, {dataTest: 3}]), toolbarWrapper([TestWrapper, {dataTest: 2}]) ];

const doc = ref('')

watch(doc, () => {
  console.log(doc.value)
})

</script>