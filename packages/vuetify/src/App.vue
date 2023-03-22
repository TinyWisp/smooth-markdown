<script setup lang="ts">
import VuetifyMarkdownEditor from './VuetifyMarkdownEditor/VuetifyMarkdownEditor.vue'
import toolbarImageBtn from './plugins/ToolbarImageBtnPlugin'
import toolbarTableBtn from './plugins/ToolbarTableBtnPlugin'
import toolbarLinkBtn from './plugins/ToolbarLinkBtnPlugin'
import { ref } from 'vue'

const doc = ref<string>('hello world')
const mode = ref<'edit' | 'view' | 'both'>('both')

function upload(file: File) {
  console.log('--upload---')
  console.log(file)
  return 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
}

</script>

<template>
  <vuetify-markdown-editor v-model="doc" v-model:mode="mode" height="30em" :plugins="[toolbarImageBtn(upload), toolbarTableBtn(), toolbarLinkBtn()]"></vuetify-markdown-editor>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
