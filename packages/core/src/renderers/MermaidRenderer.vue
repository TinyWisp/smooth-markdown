<template>
  <div class="mermaid" ref="container">
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import mermaid from 'mermaid'
import { uniqId } from '../utils/util'
import type { RendererProps } from '../core/types';

const props = defineProps<RendererProps>()

const container: Ref<HTMLElement | null> = ref(null)
mermaid.initialize({ startOnLoad: false })

watch([container, props], async () => {
  if (!container.value) {
    return
  }

  try {
    const id = uniqId()
    const { svg } = await mermaid.render(id, props.code)
    container.value.innerHTML = svg
  } catch(e) {
    console.log(e)
  }
})
</script>

<style scoped>
</style>