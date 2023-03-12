<script setup lang="ts">
import CoreEditor from './components/CoreEditor.vue'

let doc = 'hello, world!'
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
