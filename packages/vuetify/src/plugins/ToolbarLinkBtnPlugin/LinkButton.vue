<template>
  <v-btn
    size="small"
    variant="flat"
    color="white"
    class="svme-toolbar-button"
  >
    <v-icon small color="grey darken-1" :icon= "mdiLinkVariant"></v-icon>
    <v-tooltip location="bottom" activator="parent">{{ $t('svme.toolbar.link') }}</v-tooltip>

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
import type { VuetifyContext } from '@/VuetifyMarkdownEditor/types'
import { mdiLinkVariant } from '@mdi/js'
import InsertLinkDialog from './InsertLinkDialog.vue'

export default defineComponent({
  setup() {
    const getVuetifyContext = inject<() => VuetifyContext>('getVuetifyContext')

    return {
      getVuetifyContext
    }
  },
  data: function () {
    return {
      mdiLinkVariant,
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
      if (!this.getVuetifyContext) {
        console.error('ToolbarImageBtn: cannot access the getVuetifyContext() method')
        return
      }
      const context = this.getVuetifyContext()
      context.methods.command('link', {
        title: this.linkDialog.title,
        url: this.linkDialog.url
      })
    },
  }
})

</script>