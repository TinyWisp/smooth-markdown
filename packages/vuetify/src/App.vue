<script setup lang="ts">
import VuetifyMarkdownEditor from './VuetifyMarkdownEditor.vue' 
import { ref } from 'vue'

const doc = ref('hello world')
const mode = ref('both')
</script>

<template>
  <vuetify-markdown-editor v-model="doc" v-model:mode="mode"></vuetify-markdown-editor>
</template>

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
