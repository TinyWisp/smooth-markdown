const o=`<template>
  <smooth-markdown v-model="doc" v-model:mode="mode" :plugins="plugins" locale="hello">
    <template v-slot:toolbar>
      <vuetify-toolbar></vuetify-toolbar>
    </template>
  </smooth-markdown>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import { lang } from '@smooth-markdown/core/plugins'
import { classicSetup } from '@smooth-markdown/presets'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'

const doc = ref('')
const mode = ref('editor|viewer')
const plugins = [
  ...classicSetup,
  lang({
    hello: {
      insertLinkDialog: {
        title: 'world',
        cancel: 'world',
        ok: 'world',
        urlField: 'world',
        urlFieldPlaceHolder: 'world',
        urlFieldIsEmptyErr: 'world',
        urlFieldIsInvalidErr: 'world',
        titleField: 'world',
        titleFieldPlaceHolder: 'world'
      },
      insertNetworkImageDialog: {
        title: 'world',
        cancel: 'world',
        ok: 'world',
        urlField: 'world',
        urlFieldPlaceHolder: 'world',
        urlFieldIsEmptyErr: 'world',
        urlFieldIsInvalidErr: 'world',
        titleField: 'world',
        titleFieldPlaceHolder: 'world'
      },
      insertTableBoard: {
        title: 'world',
        info: 'world',
      },
      toolbar: {
        uploadLocalImage: 'world',
        insertNetworkImage: 'world',
        undo: 'world',
        redo: 'world',
        bold: 'world',
        italic: 'world',
        strikethrough: 'world',
        underline: 'world',
        subscript: 'world',
        superscript: 'world',
        mark: 'world',
        heading1: 'world',
        heading2: 'world',
        heading3: 'world',
        heading4: 'world',
        heading5: 'world',
        heading6: 'world',
        bulletedList: 'world',
        numberedList: 'world',
        quote: 'world',
        inlineCode: 'world',
        codeBlock: 'world',
        link: 'world',
        table: 'world',
        openPreview: 'world',
        closePreview: 'world',
        horizontalRule: 'world',
        toc: 'world'
      },
      codeBlock: {
        copied: 'world'
      }
    }
  })
]
<\/script>`;export{o as default};
