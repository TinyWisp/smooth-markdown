const o=`<template>
  <smooth-markdown v-model="doc" :plugins="plugins">
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { autoHeight } from '@smooth-markdown/core/plugins'
import { classicSetup } from '@smooth-markdown/presets'
import { sample as cnt } from '@/docs'

const doc = ref(cnt)
const plugins = [
  ...classicSetup,
  autoHeight()
]
<\/script>
`;export{o as default};
