const t=`<template>
  <v-btn @click="handleClick">Bold</v-btn>
</template>

<script setup>
import { inject } from 'vue'

const getContext = inject('getContext')
const context = getContext()

function handleClick() {
  context.editor.command('bold')
}
<\/script>`;export{t as default};
