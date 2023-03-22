<script setup lang="ts">
import { ref } from 'vue'
import CoreEditor from './CoreEditor/CoreEditor.vue'

const doc = ref('hello, world!')

</script>

<template>
  <CoreEditor v-model="doc" mode="both" class="core-editor"></CoreEditor>
</template>

<style>
.core-editor {
  width: 100vw;
  height: 100vh;
}
</style>
