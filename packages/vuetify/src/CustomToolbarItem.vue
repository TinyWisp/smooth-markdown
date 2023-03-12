<script lang="ts">
import { defineComponent, h } from 'vue'
import type { VNode, PropType } from 'vue'

export default defineComponent({
  props: {
    renderer: { 
      type: Object as PropType<VNode>,
      required: true,
    }
  },
  render () {
    console.log(this.renderer)
    return h(this.renderer)
  }
})
</script>