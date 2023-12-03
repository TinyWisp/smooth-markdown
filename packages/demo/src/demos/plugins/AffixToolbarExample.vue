<template>
  <div class="blank"></div>

  <div style="width: 800px; height: 500px;">
    <markdown-editor v-model="doc" mode="both" :plugins="plugins">
      <template v-slot:toolbar>
        <vuetify-toolbar color="white"></vuetify-toolbar>
        <v-divider></v-divider>
      </template>
    </markdown-editor>
  </div>

  <div class="blank"></div>
</template>

<script setup>
import { ref } from 'vue'
import { MarkdownEditor } from '@smooth-vue-markdown-editor/core'
import { affixToolbar } from '@smooth-vue-markdown-editor/core/plugins'
import VuetifyToolbar from '@smooth-vue-markdown-editor/vuetify-toolbar'

const doc = ref('')
const plugins = [ affixToolbar() ]
</script>

<style scoped>
.blank {
  width: 100%;
  height: 100vh;
}
</style>