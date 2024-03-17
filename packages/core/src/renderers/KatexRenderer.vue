<template>
  <div class="sm-codeblock">
    <element-wrapper :wrapper-list="codeBlockWrapperList">
      <div class="sm-math" ref="container">
      </div>
    </element-wrapper>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, inject, type Ref } from 'vue'
import katex from 'katex'
import ElementWrapper from '../utils/ElementWrapper.vue'
import type { FnGetContext } from '../core/types'

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

const getContext: FnGetContext = inject('getContext')!
const context = getContext()
const codeBlockWrapperList = context.pluginManager!.getCodeBlockWrapperList()
const container: Ref<HTMLElement | null> = ref(null)

watch([container, props], () => {
  container.value && katex.render(props.code, container.value, {
    throwOnError: false
  });
})
</script>

<style scoped>
.sm-codeblock {
  position: relative;
  padding: 0;
  overflow: hidden;
  border-radius: 0.45em;
  width: 100%;
}
</style>