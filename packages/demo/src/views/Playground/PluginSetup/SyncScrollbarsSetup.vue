<template>
  syncScrollbars("
    <select v-model="way" class="select">
      <option
        v-for="(item, index) in ways"
        :key="index"
        :value="item"
      >{{ item }}</option>
    </select>
  ")
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'
import { syncScrollbars } from '@smooth-markdown/core/plugins'

defineProps({
  modelValue: {
    type: Function,
    required: true
  }
})

const ways = [
  'editor-to-viewer',
  'viewer-to-editor',
  'two-way'
]

const way = ref('editor-to-viewer')

const emit = defineEmits(['update:modelValue', 'update:code'])
watch(way, () => {
  emit('update:modelValue', () => {
    return syncScrollbars(way.value)
  })
})
</script>

<style scoped>
.select {
  -webkit-appearance: listbox;
  -moz-appearance: listbox;
  appearance: listbox;
  border-style: solid;
}
</style>