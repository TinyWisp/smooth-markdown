<template>
  <core-editor :plugins="plugins" mode="both" v-model="doc">
  </core-editor>  
</template>

<script setup lang="ts">
import { CoreEditor } from '@smooth-vue-markdown-editor/core'
import customCodeBlockRenderer from './plugins/CustomCodeBlockRendererPlugin'
import customLinkAttrs from './plugins/CustomLinkAttrsPlugin'
import highlightCodeBlockInEditableArea from './plugins/HighlightCodeBlockInEditableAreaPlugin'
import pasteImage from './plugins/PasteImagePlugin'
import handleImageClickPlugin from './plugins/HandleImageClickPlugin'
import highlightCodeBlockWithHljs from './plugins/HighlightCodeBlockWithHljsPlugin'
import highlightCodeBlockWithCm from './plugins/HighlightCodeBlockWithCmPlugin'
import { ref } from 'vue'

const doc = ref('')

const plugins = [
  highlightCodeBlockWithCm(),  
  customLinkAttrs((attrMap) => {
    return attrMap
  }),
  highlightCodeBlockInEditableArea(),
  pasteImage((imgFile) => {
    console.log('---pasteImage---')
    console.log(imgFile)
    return 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
  }),
  handleImageClickPlugin((imgs, idx, event) => {
    console.log('----image-click-----')
    console.log(imgs)
    console.log(idx)
    console.log(event)
  })
]

</script>

<style scoped>
</style>
