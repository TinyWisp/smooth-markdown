<script lang="ts">
import { defineComponent, h } from 'vue'
import type { VNode, PropType } from 'vue'

export default defineComponent({
  props: {
    vnode: { 
      type: Object as PropType<VNode>,
      required: true,
    }
  },
  render () {
    return h(this.vnode)
  }
})
</script>