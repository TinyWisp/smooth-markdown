<template>
  <div class="wrapper">
    <div ref="edit" class="edit"></div>
    <div ref="view" class="view"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useCoreEditor } from './CoreEditor';

const doc = ref('hello, world')
const edit: Ref<HTMLElement | null> = ref(null)
const view: Ref<HTMLElement | null> = ref(null)

const coreContext = useCoreEditor({
  doc,
  editElem: edit,
  viewElem: view,
  plugins: []
})

</script>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
}
.edit, .view {
  width: 50%;
  flex-shrink: 0;
  flex-grow: 0;
}
</style>
./core