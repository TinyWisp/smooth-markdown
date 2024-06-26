import type { Plugin, MessageMap } from '../core/types'

const messageMap: MessageMap = {
    zh_CN: {
      insertLinkDialog: {
        title: '链接',
        cancel: '取消',
        ok: '确定',
        urlField: '地址',
        urlFieldPlaceHolder: 'https://',
        urlFieldIsEmptyErr: '',
        urlFieldIsInvalidErr: '链接地址必须以 "http://" 或 "https://" 开头。',
        titleField: '标题',
        titleFieldPlaceHolder: '',
      },
      insertNetworkImageDialog: {
        title: '图片',
        cancel: '取消',
        ok: '确定',
        urlField: '地址',
        urlFieldPlaceHolder: 'https://',
        urlFieldIsEmptyErr: '',
        urlFieldIsInvalidErr: '图片地址必须以 "http://" 或 "https://" 开头。',
        titleField: '标题',
        titleFieldPlaceHolder: ''
      },
      insertTableBoard: {
        title: '插入表格',
        info: '{row}行 {col}列'
      },
      toolbar: {
        uploadLocalImage: '上传本地图片',
        insertNetworkImage: '插入网络图片',
        undo: '恢复',
        redo: '重做',
        bold: '强调',
        italic: '倾斜',
        strikethrough: '删除线',
        underline: '下划线',
        subscript: '下标',
        superscript: '上标',
        mark: '标记',
        heading1: '一级标题',
        heading2: '二级标题',
        heading3: '三级标题',
        heading4: '四级标题',
        heading5: '五级标题',
        heading6: '六级标题',
        bulletedList: '符号列表',
        numberedList: '编号列表',
        taskList: '任务列表',
        quote: '引用',
        inlineCode: '行内代码',
        codeBlock: '代码',
        link: '链接',
        table: '插入表格',
        openPreview: '预览',
        closePreview: '关闭预览',
        horizontalRule: '插入水平线',
        toc: '目录'
      },
      codeBlock: {
        copied: '已复制'
      }
    }
}

function langZhCN(): Plugin {
  return {
    name: 'lang-zh-CN',
    messageMap
  }
}

export default langZhCN