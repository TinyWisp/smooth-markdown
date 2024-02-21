<template>
  {{ code }}
</template>

<script lang="ts">
export default {
  props: {
    lang: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  }
}
</script>