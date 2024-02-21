<template>
  <ul class="heading-list">
    <draggable :list="headingList" item-key="id" @change="handleChangeEvent">
      <template #item="{ element, index }">
        <li
          :class="['heading-list-item', `level${element.level}`, {active: index === activeIndex}]"
          @click="setActive(index)"
        >{{ element.text }}</li>
      </template>
    </draggable>
  </ul>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import type { FnGetContext } from './types'
import draggable from 'vuedraggable/src/vuedraggable'

const getContext: FnGetContext = inject('getContext')!
const context = getContext()
const { headingList, activeIndex } = context.toc

function setActive(idx: number) {
  context.toc.setActive(idx)
}

function handleChangeEvent(e: any) {
  if (!e.moved) {
    return
  }

  const { element, oldIndex, newIndex } = e.moved
}

</script>

<style scoped>
.heading-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  --heading-indent: 1em;
  width: calc(100% - 20px);
  height: auto;
  box-sizing: border-box;
  padding: 0;
}
.heading-list-item {
  display: block;
  height: 2em;
  line-height: 2em;
  width: 100%;
  box-sizing: border-box;
  color: gray;
  padding: 0 0.5em;
  cursor: pointer;
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.heading-list-item.active {
  background-color: ghostwhite;
  color: teal;
}
.level1 {
  text-indent: 0;
}
.level2 {
  text-indent: calc(var(--heading-indent) * 1);
}
.level3 {
  text-indent: calc(var(--heading-indent) * 2);
}
.level4 {
  text-indent: calc(var(--heading-indent) * 3);
}
.level5 {
  text-indent: calc(var(--heading-indent) * 4);
}
.level6 {
  text-indent: calc(var(--heading-indent) * 5);
}
</style>