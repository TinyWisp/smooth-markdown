<template>
  <div class="pa-2 bg-white rounded elevation-4">
    {{curRow > 0 ? t('svme.insertTableBoard.info', {row: curRow, col: curCol}) : t('svme.insertTableBoard.title')}}
    <table
      class="table"
      ref="table"
    >
      <tr v-for="row in rowNum" :key="row">
        <td
          v-for="col in colNum"
          :key="col"
          :class="[
            'cell',
            {'highlight': row <= curRow && col <= curCol}
          ]"
          @mouseover="setCurrentRowAndCol(row, col)"
          @click="ok()"
        ></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import type { Context } from '@smooth-vue-markdown-editor/core'
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const getContext = inject<() => Context>('getContext')
    const context = (getContext!)()
    const { t } = context.methods

    return { t }
  },
  data: function () {
    return {
      rowNum: 10,
      colNum: 10,
      minRowNum: 10,
      minColNum: 10,
      curRow: 0,
      curCol: 0,
      timer: 0,
    }
  },
  methods: {
    setCurrentRowAndCol(row: number, col: number) {
      this.curRow = row
      this.curCol = col

      if (this.rowNum > this.minRowNum && this.rowNum > row) {
        this.rowNum--
      }
      if (this.colNum > this.minColNum && this.colNum > col) {
        this.colNum--
      }

      if (this.rowNum <= row) {
        this.rowNum++
      }
      if (this.colNum <= col) {
        this.colNum++
      }
    },
    hide () {
      this.$emit('input', false)
    },
    cancel () {
      this.hide()
    },
    ok () {
      this.$emit('ok', {
        row: this.curRow,
        col: this.curCol,
      })
    },
    doNothing() {
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      if (!this.$refs?.table?.matches?.(':hover') && this.curRow > 0) {
        this.setCurrentRowAndCol(0, 0)
      }
    }, 200)
  },
  beforeUnmount () {
    clearInterval(this.timer)
  }
})
</script>

<style scoped>
.table {
  border-spacing: 2px;
}
.cell {
  width: 20px;
  height: 20px;
  border: 1px solid black !important;
}
.highlight {
  background-color: lightblue;
}
</style>