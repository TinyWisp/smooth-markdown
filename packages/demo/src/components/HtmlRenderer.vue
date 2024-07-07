<template>
  <div class="html-contianer" v-html="props.code" />
</template>

<script lang="ts" setup>
import type { RendererProps } from "@smooth-markdown/core"

const props = defineProps<RendererProps>()
</script>

<style scoped>
html-container {
  width: 100%;
  height: auto;
  border: 0;
}
</style>