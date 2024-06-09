<template>
  <pre>
import {
  EditorView,
  lineNumbers,
  highlightActiveLine,
  highlightActiveLineGutter
} from '@codemirror/view'
import { foldGutter } from '@codemirror/language'

...
codemirrorExt([</pre> 
    <div v-for="item of exts" :key="item.code" class="item">
      {{ item.code}},
      <input type="checkbox" v-model="item.enabled" class="checkbox">
    </div>
  <pre>
  ])
...
  </pre>
</template>

<script lang="ts" setup>
import { watch, ref, reactive } from 'vue'
import { EditorView, lineNumbers, highlightActiveLine, highlightActiveLineGutter } from '@codemirror/view'
import { foldGutter } from '@codemirror/language'
import type { Extension as CodeMirrorExtension } from '@codemirror/state'
import { codemirrorExt } from '@smooth-markdown/core/plugins'

defineProps({
  modelValue: {
    type: Function,
    required: true
  }
})

const exts = reactive([
  {
    code: 'EditorView.lineWrapping',
    ext: EditorView.lineWrapping,
    enabled: true
  },
  {
    code: 'lineNumbers()',
    ext: lineNumbers(),
    enabled: true
  },
   {
    code: 'highlightActiveLine()',
    ext: highlightActiveLine(),
    enabled: true
  },
  {
    code: 'highlightActiveLineGutter()',
    ext: highlightActiveLineGutter(),
    enabled: true
  },
  {
    code: 'foldGutter()',
    ext: foldGutter(),
    enabled: true
  }
])

const emit = defineEmits(['update:modelValue'])
watch(exts, () => {
  const cmExts: CodeMirrorExtension[] = []
  exts.forEach((item) => {
    if (item.enabled) {
      cmExts.push(item.ext)
    }
  })

  emit('update:modelValue', () => {
    return codemirrorExt(cmExts)
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