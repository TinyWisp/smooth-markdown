# hello


```demo
<template>
  <vuetify-markdown-editor v-model="doc" mode="both" :plugins="plugins">
  </vuetify-markdown-editor>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import { VuetifyMarkdownEditor } from '@smooth-vue-markdown-editor/vuetify'
import { toolbarImageBtn, toolbarLinkBtn, toolbarTableBtn} from '@smooth-vue-markdown-editor/vuetify-plugins'

const plugins = [
  toolbarImageBtn((file: File): Promise<string> => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener('load', () => {
          resolve(reader.result as string)
        },
        false
      )
    })
  }),
  toolbarLinkBtn(),
  toolbarTableBtn()
]

const doc: Ref<string> = ref('')

</script>

<style scoped>
</style>
```