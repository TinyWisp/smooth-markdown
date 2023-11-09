import { provide, computed } from 'vue'
import type { Ref, VNode } from 'vue'
import { undo, redo } from '@codemirror/commands'
import type { CorePlugin }  from '../CorePlugin'
import { CorePluginManager } from '../CorePlugin'
import type { CoreContext } from './types'

import { useCodeMirror } from './useCodeMirror'
import { useMarkdownIt } from './useMarkdownIt'


export interface CoreEditorConfig {
  doc: Ref<string>
  editElem: Ref<HTMLElement | null>
  viewElem: Ref<HTMLElement | null>
  plugins: CorePlugin[]
}

export function useCoreEditor(coreEditorConfig: CoreEditorConfig) {
  const pluginManager = new CorePluginManager(getCoreContext)
  pluginManager.registerPlugins(coreEditorConfig.plugins)
  const extraVnodes = computed<VNode[]>(() => {
    return pluginManager.getExtraVnodes()
  })

  const codeMirror = useCodeMirror(coreEditorConfig.doc, coreEditorConfig.editElem, pluginManager)
  const markdownIt = useMarkdownIt(coreEditorConfig.doc, coreEditorConfig.viewElem, pluginManager)

  const { insertOrReplace } = codeMirror
  const commandMap: { [key: string]: (params: any) => void } = {
    undo: () => {
      codeMirror.editorView.value && undo(codeMirror.editorView.value)
    },
    redo: () => {
      codeMirror.editorView.value && redo(codeMirror.editorView.value)
    },
    bold: () => {
      insertOrReplace('**<-->**')
    },
    italic: () => {
      insertOrReplace('*<-->*')
    },
    strike: () => {
      insertOrReplace('~~<-->~~')
    },
    underline: () => {
      insertOrReplace('++<-->++')
    },
    subscript: () => {
      insertOrReplace('~<-->~')
    },
    superscript: () => {
      insertOrReplace('^<-->^')
    },
    mark: () => {
      insertOrReplace('==<-->==')
    },
    heading1: () => {
      insertOrReplace('# <-->', true)
    },
    heading2: () => {
      insertOrReplace('## <-->', true)
    },
    heading3: () => {
      insertOrReplace('### <-->', true)
    },
    heading4: () => {
      insertOrReplace('#### <-->', true)
    },
    heading5: () => {
      insertOrReplace('##### <-->', true)
    },
    heading6: () => {
      insertOrReplace('###### <-->', true)
    },
    bulletedList: () => {
      insertOrReplace('- <-->', true)
    },
    numberedList: () => {
      insertOrReplace('1. <-->', true)
    },
    quote: () => {
      insertOrReplace('> <-->', true)
    },
    codeBlock: () => {
      insertOrReplace('```language\n<-->\n```', true)
    },
    image: (params: {title: string, url: string}) => {
      insertOrReplace(`![${params?.title}](${params?.url})`)
    },
    link: (params: {title: string, url: string}) => {
      insertOrReplace(`[${params?.title}](${params?.url})`)
    },
    horizontalRule: () => {
      insertOrReplace('---\n')
    },
    table: (params: {row: number, col: number}) => {
      const {row = 1, col = 1} = params

      const rows: string[] = []
      rows.push('|' + ' |'.repeat(col))
      rows.push('|' + '-|'.repeat(col))
      for (let i=0; i<row; i++) {
        rows.push('|' + ' |'.repeat(col))
      }
      const text = rows.join('\n') + '\n'
      insertOrReplace(text, true)
    },
    ...pluginManager.getCommandMap()
  }

  /**
   * execute a command
   * @param {string} cmd
   * @param {object} params
   */
  function command(cmd: string, params?: object) {
    if (!commandMap[cmd]) {
      console.error(`invalid command: ${cmd}`)
      return
    }
    commandMap[cmd](params)
  }

  function getCoreContext(): CoreContext {
    const context: CoreContext = {
      methods: {
        insertOrReplace,
        command,
      },
      doms: {
        edit: coreEditorConfig.editElem.value,
        view: coreEditorConfig.viewElem.value
      },
      props: coreEditorConfig
    }
    return context
  }
  provide('getCoreContext', getCoreContext)

  return {
    codeMirror,
    markdownIt,
    command,
    insertOrReplace,
    extraVnodes
  }
}


