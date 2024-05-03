<template>
  <v-btn
    size="small"
    variant="flat"
    color="white"
    class="sm-toolbar-button"
  >
    <v-icon small color="grey darken-1">mdi-image</v-icon>

    <!-- the network image dialog -->
    <insert-network-image-dialog
      @ok="insertNetworkImage"
      ref="networkImageDialog"
    ></insert-network-image-dialog>

    <!-- the upload image dialog -->
    <input
      type="file"
      ref="file"
      @change="uploadLocalImage()"
      accept="image/*"
      :style="{display: 'none'}"
    />

    <!-- menu -->
    <v-menu :offset-y="true" open-on-hover bottom activator="parent">
      <v-list>
        <v-list-item @click="showNetworkImageDialog()">
          <v-list-item-title>{{ t('toolbar.insertNetworkImage') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="showUploadDialog()">
          <v-list-item-title>{{ t('toolbar.uploadLocalImage') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import type { PropType } from 'vue'
import type { FnUpload } from './types'
import type { Context } from '@smooth-markdown/core'
import InsertNetworkImageDialog from './InsertNetworkImageDialog.vue'

export default defineComponent({
  setup() {
    const getContext = inject<() => Context>('getContext')
    const context = (getContext!)()
    const { t } = context.lang
    const { command } = context.editor

    return { command, t }
  },
  components: {
    InsertNetworkImageDialog
  },
  props: {
    fnUploadImage: {
      type: Function as PropType<FnUpload>,
      required: false,
    }
  },
  methods: {
    showNetworkImageDialog () {
      this.$refs.networkImageDialog.open()
    },
    insertNetworkImage (url: string, title: string) {
      this.command('image', {
        url,
        title
      })
    },
    showUploadDialog () {
      const input = this.$refs.file as HTMLElement
      input.focus()
      input.click()
    },
    async uploadLocalImage () {
      const input = this.$refs.file as HTMLInputElement
      if (input.files?.length) {
        let url = window.URL.createObjectURL(input.files[0])
        if (this.fnUploadImage) {
          url = await this.fnUploadImage(input.files[0])
        }
        this.command('image', {
          title: '',
          url
        })
      }
    }
  }
})

</script>