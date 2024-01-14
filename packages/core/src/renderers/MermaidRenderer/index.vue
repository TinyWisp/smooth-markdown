<template>
  <div class="mermaid" ref="container">
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import mermaid from 'mermaid'
import { uniqId } from '../../utils/util'

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

const id = uniqId()
const container: Ref<HTMLElement | null> = ref(null)

watch(container, async () => {
  if (!container.value) {
    return
  }

  mermaid.initialize({ startOnLoad: false })
  const { svg } = await mermaid.render(id, props.code)
  container.value.innerHTML = svg
})
</script>

<style scoped>
</style>