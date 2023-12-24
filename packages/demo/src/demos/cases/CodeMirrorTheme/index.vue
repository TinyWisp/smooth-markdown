<template>
  <markdown-editor v-model="doc" mode="both" :plugins="plugins">
  </markdown-editor>
</template>

<script setup>
import { ref } from 'vue'
import { MarkdownEditor } from '@smooth-vue-markdown-editor/core'
import { codemirrorExt } from '@smooth-vue-markdown-editor/core/plugins'
import cnt from './cnt.md?raw'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language/dist/index.js'

console.log('---------------')
console.log(HighlightStyle)
console.log(syntaxHighlighting)


const styles = []
const highlightStyle = HighlightStyle.define(styles);
const myHighlight = syntaxHighlighting(highlightStyle)
console.log('================')
console.log(myHighlight)
const doc = ref(cnt)
const plugins = [codemirrorExt(myHighlight)]
</script>
