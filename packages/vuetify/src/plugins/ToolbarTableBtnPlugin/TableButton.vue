<template>
  <v-btn
    size="small"
    variant="flat"
    color="white"
    class="svme-toolbar-button"
  >
    <v-icon small color="grey darken-1" :icon="mdiTablePlus"></v-icon>
    <v-tooltip location="bottom" activator="parent">Image</v-tooltip>

    <!-- table -->
    <v-menu
      :offset-y="true"
      open-on-hover
      bottom
      activator="parent">
      <insert-table-board @ok="insertTable($event.row, $event.col)"/>
    </v-menu>


  </v-btn>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import type { VuetifyContext } from '@/VuetifyMarkdownEditor/types'
import { mdiTablePlus } from '@mdi/js'
import InsertTableBoard from './InsertTableBoard.vue'

export default defineComponent({
  setup() {
    const getVuetifyContext = inject<() => VuetifyContext>('getVuetifyContext')

    return {
      getVuetifyContext
    }
  },
  components: {
    InsertTableBoard
  },
  data: function () {
    return {
      mdiTablePlus
    }
  },
  methods: {
    insertTable(row: number, col: number) {
      if (!this.getVuetifyContext) {
        console.error('ToolbarTableBtn: cannot access the getVuetifyContext() method')
        return
      }
      const context = this.getVuetifyContext()
      context.methods.command('table', {row, col})
    },
  }
})

</script>