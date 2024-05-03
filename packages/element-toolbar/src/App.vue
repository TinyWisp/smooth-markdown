<script setup lang="ts">
import { showLineNumbers, syncScrollbars, langZhCN } from '@smooth-markdown/core/plugins'
import { SmoothMarkdown } from '@smooth-markdown/core'
import ElementToolbar from './ElementToolbar'
import { ref, h } from 'vue'

const doc = ref('hello world')
const mode = ref('editor|viewer')

function upload(file: File) {
  console.log('--upload---')
  console.log(file)
  return 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
}

</script>

<template>
  <div style="width: 1200px; height:500px; border: 1px solid gray; position: relative; left: 100px; top: 100px;">
    <smooth-markdown
      v-model="doc"
      v-model:mode="mode"
      height="100%"
      locale="zh_CN"
      :plugins="[langZhCN(), showLineNumbers(), syncScrollbars()]">
      <template v-slot:toolbar>
        <element-toolbar color="white"></element-toolbar>
      </template>
    </smooth-markdown>
  </div>
</template>

<style>
body {
  width: 100vw;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
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
