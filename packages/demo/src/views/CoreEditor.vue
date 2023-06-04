<template>
    <div class="container">
        <core-editor v-model="doc" :plugins="plugins" mode="both">

        </core-editor>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CoreEditor } from '@smooth-vue-markdown-editor/core'
import pasteImage from '@smooth-vue-markdown-editor/core-plugins/pasteImage'

const plugins = [pasteImage]

let doc = ref<string>('')

</script>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
}
</style>