<template>
  <smooth-markdown v-model="doc" ref="editor">
    <template v-slot:toolbar>
      <vuetify-toolbar color="white" :items="toolbarItems"></vuetify-toolbar>
      <v-divider></v-divider>
    </template>
  </smooth-markdown>
</template>

<script lang="jsx" setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'

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