<template>
  <div>
    overlayScrollbars({
      <div
        v-for="key of Object.keys(checked)"
        :key="key"
        :class="{item: true, checked: checked[key]}"
      >
        {{ key }}: false, <input type="checkbox" v-model="checked[key]">
      </div>
    })
  </div>
</template>

<script lang="ts" setup>
import { watch, reactive } from 'vue'
import { overlayScrollbars } from '@smooth-markdown/core/plugins'
import type { OverlayScrollbarsProps } from '@smooth-markdown/core/plugins'

defineProps({
  modelValue: {
    type: Function,
    required: true
  }
})

const checked: OverlayScrollbarsProps = reactive({
  editor: false,
  viewer: false,
  toc: false,
  codeBlock: false
})

const emit = defineEmits(['update:modelValue'])
watch(checked, () => {
  const options: OverlayScrollbarsProps = {
    editor: checked.editor === false ? undefined : false,
    viewer: checked.viewer === false ? undefined : false,
    toc: checked.toc === false ? undefined: false,
    codeBlock: checked.codeBlock === false ? undefined: false,
  }

  emit('update:modelValue', () => {
    return overlayScrollbars(options)
  })
})
</script>

<style scoped>
.item {
  text-indent: 2em;
  position: relative;
  color: lightgray;
  text-decoration: line-through;
}
.item.checked {
  color: black;
  text-decoration: none;
}
.item input {
  position: absolute;
  left: 12em;
  top: 5px;
}
</style>