import { ref, watch, type Ref } from 'vue'
import { EditorView, minimalSetup } from 'codemirror'
import { keymap } from '@codemirror/view'
import { EditorSelection } from '@codemirror/state'
import { markdown } from '@codemirror/lang-markdown'
import { indentWithTab } from "@codemirror/commands"
import type { CorePluginManager } from '../CorePlugin'
import type { CmPasteEventHandlerMap } from './types'

export interface CodeMirrorContext {
  editorView: Ref<EditorView | null>,
  insertOrReplace: (text: string, forceNewLine?: boolean) => void
}

export function useCodeMirror(doc: Ref<string>, elem: Ref<HTMLElement | null>, pluginManager: CorePluginManager): CodeMirrorContext {
  const editorView: Ref<EditorView | null> = ref(null)

  let prevScrollTop = 0
  function scrollHandler() {
    setTimeout(() => {
      const scrollHeight = editorView.value!.scrollDOM.scrollHeight
      const curScrollTop    = editorView.value!.scrollDOM.scrollTop
      const scrollOffset = curScrollTop - prevScrollTop
      pluginManager.cmScrollHandler(scrollHeight, curScrollTop, scrollOffset)
      prevScrollTop = curScrollTop
    }, 0)
  }

  const pasteEventHandlerMap: CmPasteEventHandlerMap = pluginManager.getCmPasteEventHandlerMap()
  function pasteHandler(cevent: ClipboardEvent) {
    if(cevent.clipboardData?.items) {
      for (const item of cevent.clipboardData.items) {
        if (pasteEventHandlerMap[item.type]) {
          (pasteEventHandlerMap[item.type])(item)
          return
        }

        for (const handlerType of Object.keys(pasteEventHandlerMap)) {
          const tmps1 = handlerType.split('/')
          const tmps2 = item.type.split('/')
          if (tmps1.length === 2 && tmps2.length === 2 && tmps1[0] === tmps2[0] && tmps1[1] === '*') {
            pasteEventHandlerMap[handlerType](item)
            return
          }
        }
      }
    }
  }

  function createEditorView() {
    editorView.value = new EditorView({
      doc: doc.value,
      extensions: [
        ...pluginManager.getCmExtensions(),
        minimalSetup,
        keymap.of([indentWithTab]),
        markdown(pluginManager.getCmMarkdownConfig()),
        EditorView.lineWrapping,
        EditorView.updateListener.of((viewUpdate) => {
          if (viewUpdate.docChanged) {
            doc.value = viewUpdate.state.doc.toString()
            pluginManager.cmDocChanged(doc.value)
          }
        }),
        EditorView.domEventHandlers({
          scroll: scrollHandler,
          paste: pasteHandler,
          ...pluginManager.getCmDomEventHandlerMap(),
        }),
      ],
      parent: elem.value!
    })
  }

  watch(
    elem,
    () => {
      elem.value && createEditorView()
    }
  )


  /**
   * insert at the cursor or replace the selection.
   * @param {string} text
   * @param {boolean} forceNewLine whether to insert a newline when the cursor is not at the beginning of a line.
   */
  function insertOrReplace(text: string, forceNewLine: boolean = false) {
    if (!editorView.value) {
      console.log("the codemirror's instance is not created.")
      return
    }

    const keyword = '<-->'
    const selectionRange = editorView.value.state.selection.ranges[0]
    const selectedText = editorView.value.state.sliceDoc(selectionRange.from, selectionRange.to)
    let insertText = text.replace(keyword, selectedText)
    let newCursorPos = selectionRange.from === selectionRange.to && text.indexOf(keyword) >= 0
                        ? selectionRange.from + text.indexOf(keyword)
                        : selectionRange.from + insertText.length
    const prevChar = selectionRange.from > 0
                    ? editorView.value.state.doc.toString().charAt(selectionRange.from - 1)
                    : null
    if (forceNewLine && prevChar !== '\n' && prevChar !== null) {
      insertText = '\n' + insertText
      newCursorPos += 1
    }

    editorView.value.focus()
    editorView.value.dispatch({
      changes: [{
        from: selectionRange.from,
        to: selectionRange.to,
        insert: insertText,
      }],
      selection: EditorSelection.create([
        EditorSelection.range(newCursorPos, newCursorPos),
      ]),
    })
  }

  return {
    editorView,
    insertOrReplace
  }
}