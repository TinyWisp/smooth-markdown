<template>
  <v-btn
    size="small"
    variant="flat"
    color="white"
    class="sm-toolbar-button"
    @click="showLinkDialog"
  >
    <v-icon small color="grey darken-1">mdi-link-variant</v-icon>
    <v-tooltip location="bottom" activator="parent">{{ t('toolbar.link') }}</v-tooltip>

    <insert-link-dialog
      ref="linkDialog"
      @ok="insertLink"
    />
  </v-btn>
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
    showLinkDialog() {
      this.$refs.linkDialog.open()
    },
    insertLink(url: string, title: string) {
      this.command('link', {
        title,
        url
      })
    },
  }
})

</script>