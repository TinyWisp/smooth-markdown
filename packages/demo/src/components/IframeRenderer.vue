<template>
  <iframe :src="url" :id="id"></iframe>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue"
import { uniqId } from "@smooth-markdown/core"
import { iframeResize } from "iframe-resizer"
import type { RendererProps } from "@smooth-markdown/core"

const props = defineProps<RendererProps>()

const id = uniqId()

const url = computed(() => {
  const query = new URLSearchParams(window.location.search)
  const lang = query.get('lang') ?? 'en'

  return props.code.includes('?')
    ? `${props.code}&lang=${lang}`
    : `${props.code}?lang=${lang}`
})

onMounted(() => {
  iframeResize([{}], `#${id}`)
})
</script>

<style scoped>
iframe {
  width: 100%;
  height: auto;
  border: 0;
}
</style>