<template>
  <smooth-markdown v-model="doc" ref="sm">
    <template v-slot:toolbar>
      <vuetify-toolbar :items="toolbarItems"></vuetify-toolbar>
    </template>
  </smooth-markdown>
</template>

<script lang="jsx" setup>
import { onMounted, ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'
import BoldButton from './BoldButton.vue'
import { mdiAccount } from '@mdi/js'

const doc = ref('')
const sm = ref(null)
let context = null

onMounted(() => {
  context = sm.value.getContext()
})

const helloWorldButton = <v-btn onClick={() => {
  context.editor.insertOrReplace('Hello World\n')
}}>Hello World</v-btn>

const luckyButton = () => {
  return <v-btn onClick={() => {
    context.editor.insertOrReplace('lucky!\n')
  }}>lucky</v-btn>
}

const avatarButton = {
  name: 'avatar',
  icon: mdiAccount,
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