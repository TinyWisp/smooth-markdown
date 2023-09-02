<template>
  <vuetify-markdown-editor v-model="doc" mode="both">
  </vuetify-markdown-editor>
</template>

<script lang="ts">
import { VuetifyMarkdownEditor } from '@smooth-vue-markdown-editor/vuetify'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { VuetifyMarkdownEditor },
  data() {
    return {
      doc: ''
    }
  }
})
</script>

<style scoped>
</style>