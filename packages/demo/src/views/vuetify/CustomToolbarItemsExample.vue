<template>
  <markdown-editor v-model="doc" mode="both" ref="editor">
    <template v-slot:toolbar>
      <vuetify-toolbar color="white" :items="toolbarItems"></vuetify-toolbar>
      <v-divider></v-divider>
    </template>
  </markdown-editor>
</template>

<script lang="tsx" setup>
import { ref, type Ref } from 'vue'
import { MarkdownEditor } from '@smooth-vue-markdown-editor/core'
import VuetifyToolbar from '@smooth-vue-markdown-editor/vuetify-toolbar'

const doc = ref('')
const editor = ref(null)

const btn1 = <v-btn onClick={() => {
  editor.value.insertOrReplace('btn1\n')
}}>btn1</v-btn>

const btn2 = () => {
  return <v-btn onClick={() => {
    editor.value.insertOrReplace('btn2\n')
  }}>btn2</v-btn>
}

const btn3 = {
  name: 'avatar',
  icon: 'mdi-account',
  tip: 'avatar',
  exec() {
    editor.value.command('image', {
      url: '/img/avatar.jpeg',
      title: 'avatar'
    })
  }
}

const toolbarItems = [
  'redo', 'undo', 'divider', btn1, btn2, btn3
]

</script>