<script lang="ts">
import { defineComponent, h, type VNode, type Component, type PropType } from 'vue';

export default defineComponent({
  setup(props, { slots }) {
    return () => {
      const wrapperList: (Component | VNode)[] = []

      if (wrapperList.length === 0) {
        return slots.default?.()
      }

      let vnode: any = (slots.default!)()
      for (let i=wrapperList.length-1; i>=0; i--) {
        const wrapper = wrapperList[i]
        vnode = h(wrapper, vnode)
      }
      return vnode
    }
  },
  props: {
    wrapperList: {
      type: Object as PropType<(Component | VNode)[]>,
      required: true
    }
  },
})
</script>