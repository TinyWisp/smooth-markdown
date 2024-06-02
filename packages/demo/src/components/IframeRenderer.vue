<template>
  <iframe :src="props.code" :id="id"></iframe>
</template>

<script lang="ts" setup>
import { onMounted } from "vue"
import { uniqId } from "@smooth-markdown/core"
import { iframeResize } from "iframe-resizer"

interface IframeRendererProps {
  lang: string
  code: string
}

const props = defineProps<IframeRendererProps>()

const id = uniqId()

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