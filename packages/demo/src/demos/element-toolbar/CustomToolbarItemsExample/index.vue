<template>
  <smooth-markdown v-model="doc" ref="sm">
    <template v-slot:toolbar>
      <element-toolbar color="white" :items="toolbarItems"></element-toolbar>
      <v-divider></v-divider>
    </template>
  </smooth-markdown>
</template>

<script lang="jsx" setup>
import { onMounted, ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import ElementToolbar from '@smooth-markdown/element-toolbar'
import BoldButton from './BoldButton.vue'

const doc = ref('')
const sm = ref(null)
let context = null

onMounted(() => {
  context = sm.value.getContext()
})

const helloWorldButton = <el-button onClick={() => {
  context.editor.insertOrReplace('Hello World\n')
}}>Hello World</el-button>

const luckyButton = () => {
  return <el-button onClick={() => {
    context.editor.insertOrReplace('lucky!\n')
  }}>lucky</el-button>
}

const avatarButton = {
  name: 'avatar',
  icon: 'mdi mdi-account',
  tip: 'avatar',
  exec() {
    context.editor.command('image', {
      url: '/img/avatar.png',
      title: 'avatar'
    })
  }
}

const toolbarItems = [
  'undo', 'redo', 'divider', helloWorldButton, luckyButton, avatarButton, BoldButton
]

</script>