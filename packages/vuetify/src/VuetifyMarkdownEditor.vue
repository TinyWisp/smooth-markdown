<template>
  <core-editor
    :mode="mode"
    :modelValue="modelValue"
    :plugins="plugins"
    height="30em"
    @update:modelValue="(val) => $emit('update:modelValue', val)"
    @update:mode="(val) => $emit('update:mode', val)"
    ref="coreEditor"
  >
    <template v-slot:toolbar>

      <!-- the link dialog -->
      <insert-link-dialog
        v-model="linkDialog.show"
        v-model:title="linkDialog.title"
        v-model:url="linkDialog.url"
        @ok="insertLink()"
      />

      <!-- the network image dialog -->
      <insert-network-image-dialog
        v-model="networkImageDialog.show"
        v-model:url="networkImageDialog.url"
        @ok="insertNetworkImage()"
      />

      <!-- the upload image dialog -->
      <input
        type="file"
        ref="file"
        @change=uploadLocalImage()
        accept="image/*"
        :style="{display: 'none'}" />

      <v-toolbar density="compact" class="svme-toolbar">
        <template v-for="(item, idx) of calcToolbarButtons" :key="item.name + idx">
          <!-- divider -->
          <v-divider
            class="vertical-divider mx-2"
            vertical
            v-if="item.name === 'divider'"/>

          <!-- spacer -->
          <v-spacer v-else-if="item.name === 'spacer'"/>

          <!-- custom item -->
          <custom-toolbar-item
            :renderer="item.custom()"
            v-else-if="typeof item.custom === 'function'"
          />

          <!-- ordinary button -->
          <v-btn
            size="small"
            variant="flat"
            color="white"
            class="svme-toolbar-button"
            :key="item.name"
            @click="clickToolbarButton(item)"
            v-else>
            <v-icon small color="grey darken-1" :icon="typeof item.icon === 'function' ? item.icon() : item.icon"></v-icon>
            <v-tooltip location="bottom" activator="parent">{{ typeof item.tip === 'function' ? item.tip() : $t(`svme.toolbar.${item.name}`)}}</v-tooltip>
          </v-btn>

        </template>
      </v-toolbar>

      <v-divider></v-divider>

    </template>
  </core-editor>
</template>

<script>
import { CoreEditor, highlightPlugin, imageClickEventPlugin } from '@smooth-vue-markdown-editor/core'
import '@smooth-vue-markdown-editor/core/dist/style.css'
import InsertNetworkImageDialog from './InsertNetworkImageDialog.vue'
import InsertLinkDialog from './InsertLinkDialog.vue'
import InsertTableBoard from './InsertTableBoard.vue'
import ImagePlugin from './ImagePlugin'
import CustomToolbarItem from './CustomToolbarItem.vue'
import {
  mdiUndo,
  mdiRedo,
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatStrikethrough,
  mdiFormatUnderline,
  mdiFormatSubscript,
  mdiFormatSuperscript,
  mdiFormatColorHighlight,
  mdiFormatHeader1,
  mdiFormatHeader2,
  mdiFormatHeader3,
  mdiFormatHeader4,
  mdiFormatHeader5,
  mdiFormatHeader6,
  mdiFormatListBulleted,
  mdiFormatListNumbered,
  mdiFormatQuoteClose,
  mdiCodeTags,
  mdiLinkVariant,
  mdiImage,
  mdiCopyright,
  mdiMinus,
  mdiTablePlus,
  mdiEyeOffOutline,
  mdiEyeOutline,
} from '@mdi/js'

const imagePlugin = new ImagePlugin()

export default {
  name: 'vuetify-markdown-editor',
  components: {
    CoreEditor,
    InsertLinkDialog,
    InsertNetworkImageDialog,
    CustomToolbarItem,
  },
  props: {
    modelValue: {
      type: String,
      default: '',
      required: true,
    },
    mode: {
      type: String,
      default: 'both',
      required: true,
    },
    height: {
      type: String,
      default: '30em',
    },
    toolbarButtons: {
      type: Array,
      default: () => {
        return [
          'redo', 'undo', 'divider', 
          'bold', 'italic', 'strike', 'underline', 'subscript', 'superscript', 'mark', 'heading1', 'heading2', 'heading3', 'divider',
          'bulletedList', 'numberedList', 'quote', 'codeBlock', 'link', 'horizontalRule', 'table', 'image',
          'spacer',
          'preview'
        ]
      },
    },
  },
  data: function () {
    return {
      plugins: [
        highlightPlugin(),
        imageClickEventPlugin(this.handleImageClick),
      ],
      linkDialog: {
        show: false,
        title: '',
        url: ''
      },
      networkImageDialog: {
        show: false,
        url: ''
      },
      toolbarButtonMap: {
        divider: {},
        spacer: {},
        undo: {
          icon: mdiUndo,
          cmd: 'undo',
        },
        redo: {
          icon: mdiRedo,
          cmd: 'redo',
        },
        bold: {
          icon: mdiFormatBold,
          cmd: 'bold',
        },
        italic: {
          icon: mdiFormatItalic,
          cmd: 'italic',
        },
        strike: {
          icon: mdiFormatStrikethrough,
          cmd: 'strike',
        },
        underline: {
          icon: mdiFormatUnderline,
          cmd: 'underline',
        },
        subscript: {
          icon: mdiFormatSubscript,
          cmd: 'subscript',
        },
        superscript: {
          icon: mdiFormatSuperscript,
          cmd: 'superscript',
        },
        mark: {
          icon: mdiFormatColorHighlight,
          cmd: 'mark',
        },
        heading1: {
          icon: mdiFormatHeader1,
          cmd: 'heading1',
        },
        heading2: {
          icon: mdiFormatHeader2,
          cmd: 'heading2',
        },
        heading3: {
          icon: mdiFormatHeader3,
          cmd: 'heading3',
        },
        heading4: {
          icon: mdiFormatHeader4,
          cmd: 'heading4',
        },
        heading5: {
          icon: mdiFormatHeader5,
          cmd: 'heading5',
        },
        heading6: {
          icon: mdiFormatHeader6,
          cmd: 'heading6',
        },
        bulletedList: {
          icon: mdiFormatListBulleted,
          cmd: 'bulletedList',
        },
        numberedList: {
          icon: mdiFormatListNumbered,
          cmd: 'numberedList',
        },
        quote: {
          icon: mdiFormatQuoteClose,
          cmd: 'quote',
        },
        codeBlock: {
          icon: mdiCodeTags,
          cmd: 'codeBlock',
        },
        link: {
          icon: mdiLinkVariant,
          exec: () => {
            this.showLinkDialog()
          }
        },
        image: imagePlugin.toolbarButtonMap.image,
        insertNetworkImage: {
          icon: mdiImage,
          exec: () => {
            this.showNetworkImageDialog()
          }
        },
        uploadLocalImage: {
          icon: mdiImage,
          exec: () => {
            this.showUploadDialog()
          }
        },
        horizontalRule: {
          icon: mdiMinus,
          cmd: 'horizontalRule',
        },
        table: {
          icon: mdiTablePlus,
          exec: () => {}
        },
        preview: {
          name: 'preview',
          icon: () => {
            return this.mode === 'both'
                   ? mdiEyeOffOutline
                   : mdiEyeOutline
          },
          exec: () => {
            this.$emit('update:mode', this.mode === 'both' ? 'edit' : 'both')
          },
          tip: () => {
            return this.mode === 'split'
                   ? this.$t('svme.toolbar.closePreview')
                   : this.$t('svme.toolbar.openPreview')
          }
        }
      }
    }
  },
  computed: {
    calcToolbarButtons() {
      const buttons = []

      this.toolbarButtons.forEach((item) => {
        let button = null

        if (typeof item === 'string' && this.toolbarButtonMap[item]) {
          const name = item
          button = Object.assign({}, this.toolbarButtonMap[item], {name})
          
        } else if (typeof item === 'object' && item.name) {
          button = Object.assign({}, this.toolbarButtonMap[item.name], item)

        } else {
          console.error(`invalid toolbar button: ${JSON.stringify(item)}`);
        }

        button && buttons.push(button)
      })


      return buttons
    }
  },
  watch: {
    preview(newVal, oldVal) {
      this.clonePreview = newVal
    }
  },
  methods: {
    clickToolbarButton (item) {
      if (typeof item.exec === 'function') {
        item.exec()
      } else {
        const cmd = item.cmd || item.name
        this.$refs.coreEditor.command(cmd)
      }
    },
    //--------------------------link-------------------------
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
      const editor = this.$refs.editor
      this.$refs.coreEditor.command('link', {
        title: this.linkDialog.title,
        url: this.linkDialog.url
      })
    },
    //--------------------------network image-------------------------
    showNetworkImageDialog () {
      this.networkImageDialog.url  = ''
      this.networkImageDialog.show = true
    },
    hideNetworkImageDialog () {
      this.networkImageDialog.show = false
    },
    insertNetworkImage () {
      this.$refs.coreEditor.command('image', {url: this.networkImageDialog.url, title: ''})
      this.hideNetworkImageDialog()
    },

    //--------------------------local image-------------------------
    showUploadDialog () {
      const input = this.$refs.file
      input.focus()
      input.click()
    },
    async uploadLocalImage() {
      if (typeof fnUploadImage !== 'function') {
        return
      }
      const input = this.$refs.file
      const url = await this.fnUploadImage(input.files[0])
      this.$refs.coreEditor.command('image', {url})
    },

    //-------------------------------table------------------------------
    insertTable(row, col) {
      this.$refs.coreEditor.command('table', {row, col})
    },

    //-------------------------------symbol------------------------------
    insertSymbol(symbol) {
      this.insertText(`:${symbol}:`)
    },

    handleImageClick(images, idx) {
      console.log('---image-click-----')
      console.log(images)
      console.log(idx)
    }

  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>

<style scoped>
.svme-toolbar {
  background-color: white;
}
</style>