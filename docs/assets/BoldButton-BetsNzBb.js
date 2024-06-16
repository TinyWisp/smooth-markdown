const t=`<template>
  <el-button @click="handleClick">Bold</el-button>
</template>

<script setup>
import { inject } from 'vue'

const getContext = inject('getContext')
const context = getContext()

function handleClick() {
  context.editor.command('bold')
}
<\/script>`;export{t as default};
