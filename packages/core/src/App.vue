<script setup lang="ts">
import { ref } from 'vue'
import CoreEditor from './CoreEditor/CoreEditor.vue'
import highlight from './plugins/HighlightPlugin'
import customLinkAttrs from './plugins/CustomLinkAttrsPlugin'

const doc = ref('hello, world!')
const plugins = [
  highlight(),
  customLinkAttrs((attrMap: any) => {
    const newAttrs = Object.assign({}, attrMap, {href: 'https://www.google.com', title: 'google', class: 'hello'})
    return newAttrs
  })
]

</script>

<template>
  <CoreEditor v-model="doc" mode="both" class="core-editor" :plugins="plugins"></CoreEditor>
</template>

<style>
.core-editor {
  width: 100vw;
  height: 100vh;
}
</style>
