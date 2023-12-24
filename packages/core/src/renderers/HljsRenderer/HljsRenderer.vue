<template>
  <pre><code ref="codeBlockEl" :class="['code-block', 'hljs', `language-${lang}`]">{{ code }}</code></pre>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import hljs from 'highlight.js/lib/common'

const props = defineProps({
  lang: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  fnGetLangDef: {
    type: Function,
    required: true
  }
})

const codeBlockEl: Ref<HTMLElement | null> = ref(null)

onMounted(() => {
  const getLangDef = props.fnGetLangDef
  const langDef = getLangDef(props.lang)
  if (langDef) {
    (async() => {
      if (!hljs.getLanguage(props.lang)) {
        const langDefModule = await langDef()
        hljs.registerLanguage(props.lang, langDefModule.default)
      }
      codeBlockEl.value && hljs.highlightElement(codeBlockEl.value)
    })()
  }
})
</script>

<style scoped>
.code-block {
  min-width: 100%;
}
</style>