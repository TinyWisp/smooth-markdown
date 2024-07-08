<template>
  <smooth-markdown v-model="doc" :plugins="plugins">
    <template v-slot:toolbar>
      <vuetify-toolbar></vuetify-toolbar>
    </template>
  </smooth-markdown>
</template>

<script lang="jsx" setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { toolbarWrapper } from '@smooth-markdown/core/plugins'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'
import { watch } from 'vue'
import TestWrapper from './TestWrapper.vue';

const plugins = [ toolbarWrapper([TestWrapper, {dataTest: 3}]), toolbarWrapper([TestWrapper, {dataTest: 2}]) ];

const doc = ref('')

watch(doc, () => {
  console.log(doc.value)
})

</script>