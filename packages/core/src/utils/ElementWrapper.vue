<template>
  <component v-if="wrapperList.length > 0" :is="wrapperList[0][0]" v-bind="wrapperList[0][1]">
    <element-wrapper :wrapper-list="wrapperList.slice(1)">
      <slot></slot>
    </element-wrapper>
  </component>
  <slot v-else></slot>
</template>

<script lang="ts">
import { defineComponent, h, type PropType } from 'vue';
import type { Wrapper } from '../core/types';

export default defineComponent({
  name: 'element-wrapper',
  props: {
    wrapperList: {
      type: Object as PropType<Wrapper[]>,
      required: true
    }
  }
})
</script>