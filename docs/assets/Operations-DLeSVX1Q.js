const n=`<template>
  <div class="btn-list">
    <button @click="helloWorld">hello world</button>
    <button @click="undo">undo</button>
    <button @click="redo">redo</button>
    <button @click="table">table</button>
  </div>

  <smooth-markdown v-model="doc" v-model:mode="mode" :plugins="plugins" ref="sm">
    <template v-slot:toolbar>
      <vuetify-toolbar></vuetify-toolbar>
    </template>
  </smooth-markdown>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { langEn } from '@smooth-markdown/core/plugins'
import { classicSetup } from '@smooth-markdown/presets'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'

const doc = ref('')
const mode = ref('editor|viewer')
const sm = ref(null)
let context = null
const plugins = [
  ...classicSetup,
  langEn()
]

onMounted(() => {
  context = sm.value.getContext();
})

function undo() {
  context.editor.command('undo')
}

function redo() {
  context.editor.command('redo')
}

function helloWorld() {
  context.editor.insertOrReplace('helloWorld')
}

function table() {
  context.editor.command('table', {row: 5, col: 5})
}

<\/script>

<style scoped>
.btn-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
}
.btn-list button ~ button {
  margin-left: 20px;
}
button {
  border: 1px solid gray;
  border-radius: 3px;
  padding: 5px 15px;
}
</style>`;export{n as default};
