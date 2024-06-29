<template>
  <div class="card">
    {{ props.code }}
  </div>
</template>

<script setup>
const props = defineProps({
  lang: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>
.card {
  border: 1px solid lightgray;
  border-radius: 3px;
  box-shadow: 10px 10px 9px 0px rgba(0,0,0,0.2);
  -webkit-box-shadow: 10px 10px 9px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 10px 10px 9px 0px rgba(0,0,0,0.2);
  margin: 1em 0;
  padding: 1em;
}
</style>