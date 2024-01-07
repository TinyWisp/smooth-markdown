<template>
  <slot name="default">
    <ul class="heading-list">
      <li
        v-for="item of headingList"
        :key="item.id"
        :class="['heading-list-item', `level${item.level}`, {active: item.id === activeId}]"
        @click="select(item)"
      >{{ item.text }}</li>
    </ul>
  </slot>
</template>

<script lang="ts" setup>
import { inject, computed, type Ref } from 'vue'
import type { FnGetContext, Heading } from './types'
import { useActiveScroll } from 'vue-use-active-scroll'

const getContext: FnGetContext = inject('getContext')!
const context = getContext()
const containerRef = context.doms.viewScroll
const headingList = context.data.headingList as Ref<Heading[]>

const props = defineProps({
  UasOptions: {
    type: Object,
    required: false,
    default: function() {
      return {}
    }
  }
})

const targets = computed(() => {
  return headingList.value.map((item) => item.id)
})

const { activeId, setActive } = useActiveScroll(targets, {
   root: containerRef,
   replaceHash: false,
   ...props.UasOptions
})

function select(item: Heading) {
  setActive(item.id)
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