import type { Plugin, MessageMap } from '../core/types'

const messageMap: MessageMap = {
  en: {
    insertLinkDialog: {
      title: 'link',
      cancel: 'cancel',
      ok: 'insert',
      urlField: 'URL',
      urlFieldPlaceHolder: 'https://',
      urlFieldIsEmptyErr: '',
      urlFieldIsInvalidErr: 'The URL must start with either "http://" or "https://".',
      titleField: 'title',
      titleFieldPlaceHolder: ''
    },
    insertNetworkImageDialog: {
      title: 'image',
      cancel: 'cancel',
      ok: 'insert',
      urlField: 'URL',
      urlFieldPlaceHolder: 'https://',
      urlFieldIsEmptyErr: '',
      urlFieldIsInvalidErr: 'The URL must start with either "http://" or "https://".',
      titleField: 'title',
      titleFieldPlaceHolder: ''
    },
    insertTableBoard: {
      title: 'Insert Table',
      info: '{row} * {col} table',
    },
    toolbar: {
      uploadLocalImage: 'Upload a Local Image',
      insertNetworkImage: 'Insert a Network Image',
      undo: 'Undo',
      redo: 'Redo',
      bold: 'Strong',
      italic: 'Italic',
      strikethrough: 'Strikethrough',
      underline: 'Underline',
      subscript: 'Subscript',
      superscript: 'Superscript',
      mark: 'Highlight',
      heading1: 'Heading 1',
      heading2: 'Heading 2',
      heading3: 'Heading 3',
      heading4: 'Heading 4',
      heading5: 'Heading 5',
      heading6: 'Heading 6',
      bulletedList: 'Bulleted List',
      numberedList: 'Numbered List',
      quote: 'Quote',
      inlineCode: 'Inline Code',
      codeBlock: 'Code',
      link: 'Link',
      table: 'Insert Table',
      openPreview: 'Open Preview',
      closePreview: 'Close Preview',
      horizontalRule: 'Horizontal Rule',
    },
    codeBlock: {
      copied: 'Copied'
    }
  }
}

function langEn(): Plugin {
  return {
    name: 'core-plugin-lang-en',
    messageMap
  }
}

export default langEn