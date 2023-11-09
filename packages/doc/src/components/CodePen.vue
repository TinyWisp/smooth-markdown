<template>
  <div 
    class="codepen" 
    data-prefill 
    data-height="400" 
    data-theme-id="1"
    data-default-tab="html,result" 
  >
  <pre data-lang="html">
    {{ html }}
  </pre>
  <pre data-lang="javascript">
    {{ javascript }}
  </pre>
  <pre data-lang="css">
    {{ css }}
  </pre>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  lang: string
  code: string
}>()

const pattern = /<template>(.*)<\/template>\s+<script[^>]*>(.*)<\/script>\s+<style[^>]*>(.*)<\/style>/s
const [, html, javascript, css] = props.code.match(pattern) || ['', '', '', '']
</script>

<style scoped>
</style>