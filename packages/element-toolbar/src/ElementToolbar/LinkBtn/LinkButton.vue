<template>
  <el-tooltip :content="t('toolbar.link')" placement="bottom">
    <el-button text @click="showLinkDialog">
      <template #icon>
        <mdi-js-icon :path="mdiLinkVariant"></mdi-js-icon>
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
import MdiJsIcon from '../MdiJsIcon.vue'
import { mdiLinkVariant } from '@mdi/js'

export default defineComponent({
  setup() {
    const getContext = inject<() => Context>('getContext')
    const context = (getContext!)()
    const { t } = context.lang!
    const { command } = context.editor

    return { command, t }
  },
  components: {
    InsertLinkDialog,
    MdiJsIcon
  },
  data() {
    return {
      mdiLinkVariant
    }
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