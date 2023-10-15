<script lang="ts">
import { defineComponent, h } from 'vue'
import type { VNode, PropType } from 'vue'

export default defineComponent({
  props: {
    vnodes: {
      type: Object as PropType<VNode[]>,
      required: true,
    }
  },
  render () {
    return this.vnodes.length !== 1
      ? h('div', {}, this.vnodes)
      : this.vnodes[0]
  }
})
</script>