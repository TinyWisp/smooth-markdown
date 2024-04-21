<template>
  <v-btn
    size="small"
    variant="flat"
    color="white"
    class="sm-toolbar-button"
  >
    <v-icon small color="grey darken-1">mdi-table-plus</v-icon>
    <v-tooltip location="bottom" activator="parent">{{ t('toolbar.table') }}</v-tooltip>

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
import type { Context } from '@smooth-markdown/core'
import InsertTableBoard from './InsertTableBoard.vue'

export default defineComponent({
  setup() {
    const getContext = inject<() => Context>('getContext')
    const context = (getContext!)()
    const { t } = context.lang
    const { command } = context.editor

    return { command, t }
  },
  components: {
    InsertTableBoard
  },
  data: function () {
    return {
    }
  },
  methods: {
    insertTable(row: number, col: number) {
      this.command('table', {row, col})
    },
  }
})

</script>