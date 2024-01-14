<template>
  <component v-if="wrapperList.length > 0" :is="wrapperList[0][0]" v-bind="wrapperList[0][1]" ref="wrapper">
    <element-wrapper :wrapper-list="wrapperList.slice(1)">
      <slot></slot>
    </element-wrapper>
  </component>
  <slot v-else></slot>
</template>

<script lang="ts">
import { defineComponent, inject, type PropType } from 'vue';
import type { Wrapper, FnSetContext } from '../core/types';

export default defineComponent({
  name: 'element-wrapper',
  props: {
    wrapperList: {
      type: Object as PropType<Wrapper[]>,
      required: true
    }
  },
  mounted() {
    if (this.wrapperList.length > 0 && this.wrapperList[0].length === 3) {
      const refName = this.wrapperList[0][2]
      if (refName) {
        const setContext: FnSetContext = inject('setContext')!
        setContext('others', refName, this.$refs.wrapper)
      }
    }
  }
})
</script>