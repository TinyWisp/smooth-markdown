<template>
  <pre>
import {
  CodeMirrorRenderer,
  MermaidRenderer,
  KatexRenderer
} from '@smooth-markdown/core/rendereres';

...
customCodeBlockRenderer({
  </pre>
    <div v-for="item of renderers" :key="item.key" class="item">
      {{ item.desc }},
      <input type="checkbox" v-model="item.enabled" class="checkbox">
    </div>
  <pre>
})
  </pre>

</template>

<script lang="ts" setup>
import { watch, reactive } from 'vue'
import { customCodeBlockRenderer } from '@smooth-markdown/core/plugins'
import { CodeMirrorRenderer, KatexRenderer, MermaidRenderer } from '@smooth-markdown/core/renderers'

defineProps({
  modelValue: {
    type: Function,
    required: true
  }
})

const renderers = reactive([
  {
    desc: 'math: [KatexRenderer]',
    key: 'math',
    renderer: [KatexRenderer],
    enabled: true
  },
  {
    desc: 'mermaid: [MermaidRenderer]',
    key: 'mermaid',
    renderer: [MermaidRenderer],
    enabled: true
  },
  {
    desc: 'CodeMirrorRenderer: [CodeMirrorRenderer]',
    key: 'default',
    renderer: [CodeMirrorRenderer],
    enabled: true
  }
])

const emit = defineEmits(['update:modelValue'])
watch(renderers, () => {
  const rendererMap: {[key: string]: any} = {}
  renderers.forEach((item) => {
    if (item.enabled) {
      rendererMap[item.key] = item.renderer
    }
  })

  emit('update:modelValue', () => {
    return customCodeBlockRenderer(rendererMap)
  })
}, { deep: true })

</script>

<style scoped>
.item {
  text-indent: 2em;
}
.item .checkbox {
  display: inline-block;
}
</style>