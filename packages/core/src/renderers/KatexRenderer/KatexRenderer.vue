<template>
  <div class="sm-math" ref="container">
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.css'

const props = defineProps({
  lang: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  }
})

const container: Ref<HTMLElement | null> = ref(null)

watch(container, () => {
  container.value && katex.render(props.code, container.value, {
    throwOnError: false
  });
})
</script>

<style scoped>
</style>