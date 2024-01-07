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
      v-model="networkImageDialog.show"
      v-model:url="networkImageDialog.url"
      @ok="insertNetworkImage"
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
          <v-list-item-title>{{ t('svme.toolbar.insertNetworkImage') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="showUploadDialog()">
          <v-list-item-title>{{ t('svme.toolbar.uploadLocalImage') }}</v-list-item-title>
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
    const { command, t } = context.methods

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
  data() {
    return {
      networkImageDialog: {
        show: false,
        url: '',
        title: '',
      }
    }
  },
  methods: {
    insert (params: {url: string, title: string}) {
      this.command('image', params)
    },
    showNetworkImageDialog () {
      this.networkImageDialog.url  = ''
      this.networkImageDialog.show = true
    },
    hideNetworkImageDialog () {
      this.networkImageDialog.show = false
    },
    insertNetworkImage () {
      this.insert({
        url: this.networkImageDialog.url,
        title: '',
      })
      this.hideNetworkImageDialog()
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
        this.insert({
          title: '',
          url
        })
      }
    }
  }
})

</script>