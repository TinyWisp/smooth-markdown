<template>
  <vuetify-markdown-editor
    v-model="doc"
    mode="view"
    :plugins="plugins"
    :show-toolbar="false">
  </vuetify-markdown-editor>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import { VuetifyMarkdownEditor, type VuetifyPlugin } from '@smooth-vue-markdown-editor/vuetify'
import { customCodeBlockRenderer } from '@smooth-vue-markdown-editor/core-plugins'
import CodePen from './components/CodePen.vue'
import vuetifyDoc from './views/vuetify.md?raw'

const plugins: VuetifyPlugin[] = [
  customCodeBlockRenderer({
    demo: [CodePen]
  })
]

const doc: Ref<string> = ref(vuetifyDoc)
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>

<style scoped>
</style>