<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path :d="props.path"></path>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  path: {
    type: String,
    required: true
  }
})
</script>