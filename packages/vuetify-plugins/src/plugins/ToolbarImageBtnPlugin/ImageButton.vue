<template>
  <v-btn
    size="small"
    variant="flat"
    color="white"
    class="svme-toolbar-button"
  >
    <v-icon small color="grey darken-1" :icon= "mdiImage"></v-icon>

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
import { mdiImage } from '@mdi/js'
import type { FnUpload } from './types'
import type { VuetifyContext } from '@smooth-vue-markdown-editor/vuetify'
import { t } from '@smooth-vue-markdown-editor/core'
import InsertNetworkImageDialog from './InsertNetworkImageDialog.vue'

export default defineComponent({
  setup() {
    const getVuetifyContext = inject<() => VuetifyContext>('getVuetifyContext')

    return {
      getVuetifyContext, t
    }
  },
  components: {
    InsertNetworkImageDialog
  },
  props: {
    fnUploadImage: {
      type: Function as PropType<FnUpload>,
      required: true,
    }
  },
  data() {
    return {
      mdiImage,
      networkImageDialog: {
        show: false,
        url: '',
        title: '',
      }
    }
  },
  methods: {
    insert (params: {url: string, title: string}) {
      if (!this.getVuetifyContext) {
        console.error('ToolbarImageBtn: cannot access the getVuetifyContext() method')
        return
      }
      const context = this.getVuetifyContext()
      context.methods.command('image', params)
    },
    showNetworkImageDialog () {
      console.log('---showNetworkImageDialog---')
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
      if (Array.isArray(input.files) && input.files.length > 0) {
        const url = await this.fnUploadImage(input.files[0])
        this.insert({
          title: '',
          url
        })
      }
    }
  }
})

</script>