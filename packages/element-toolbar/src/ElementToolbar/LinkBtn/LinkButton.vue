<template>
  <el-tooltip :content="t('toolbar.link')" placement="bottom">
    <el-button text @click="showLinkDialog">
      <template #icon>
        <i class="mdi mdi-link-variant"></i>
      </template>
    </el-button>
  </el-tooltip>
  <insert-link-dialog
    ref="insertLinkDialog"
    @ok="insertLink"
  />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import type { Context } from '@smooth-markdown/core'
import InsertLinkDialog from './InsertLinkDialog.vue'

export default defineComponent({
  setup() {
    const getContext = inject<() => Context>('getContext')
    const context = (getContext!)()
    const { t } = context.lang
    const { command } = context.editor

    return { command, t }
  },
  components: {
    InsertLinkDialog
  },
  methods: {
    insertLink(url: string, title: string) {
      this.command('link', {
        title,
        url
      })
    },
    showLinkDialog() {
      this.$refs.insertLinkDialog.open()
    }
  }
})

</script>