<template>
  <v-btn
    size="small"
    variant="flat"
    color="white"
    class="svme-toolbar-button"
    @click="showLinkDialog"
  >
    <v-icon small color="grey darken-1">mdi-link-variant</v-icon>
    <v-tooltip location="bottom" activator="parent">{{ t('svme.toolbar.link') }}</v-tooltip>

    <insert-link-dialog
      v-model="linkDialog.show"
      v-model:title="linkDialog.title"
      v-model:url="linkDialog.url"
      @ok="insertLink()"
    />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import type { Context } from '@smooth-vue-markdown-editor/core'
import InsertLinkDialog from './InsertLinkDialog.vue'

export default defineComponent({
  setup() {
    const getContext = inject<() => Context>('getContext')
    const context = (getContext!)()
    const { command, t } = context.methods

    return { command, t }
  },
  data: function () {
    return {
      linkDialog: {
        show: false,
        title: '',
        url: ''
      },
    }
  },
  components: {
    InsertLinkDialog
  },
  methods: {
    showLinkDialog() {
      this.linkDialog.title = ''
      this.linkDialog.url   = ''
      this.linkDialog.show = true
    },
    hideLinkDialog() {
      this.linkDialog.show = false
    },
    insertLink() {
      this.hideLinkDialog()
      this.command('link', {
        title: this.linkDialog.title,
        url: this.linkDialog.url
      })
    },
  }
})

</script>