<template>
  <el-popover
    placement="bottom"
    trigger="hover"
    width="auto"
  >
    <template #reference>
      <el-button text>
        <template #icon>
          <mdi-js-icon :path="mdiTablePlus"></mdi-js-icon>
        </template>
      </el-button>
    </template>

    <insert-table-board @ok="insertTable($event.row, $event.col)"/>
  </el-popover>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import type { Context } from '@smooth-markdown/core'
import InsertTableBoard from './InsertTableBoard.vue'
import MdiJsIcon from '../MdiJsIcon.vue'
import { mdiTablePlus } from '@mdi/js'

export default defineComponent({
  setup() {
    const getContext = inject<() => Context>('getContext')
    const context = (getContext!)()
    const { t } = context.lang!
    const { command } = context.editor

    return { command, t }
  },
  components: {
    InsertTableBoard,
    MdiJsIcon
  },
  data() {
    return {
      mdiTablePlus
    }
  },
  methods: {
    insertTable(row: number, col: number) {
      this.command('table', {row, col})
    },
  }
})

</script>