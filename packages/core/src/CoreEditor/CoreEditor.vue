<template>
  <classic-editor-layout
    :isFullScreen="false"
    :enableScrollbar="true"
    :class="[`svme-core-mode-${mode}`, 'svme-core-container']"
    height="30em"
    containerId="test"
  >
    <template v-slot:classic-editor-toolbar>
      <div class="svme-core-extra">
        <v-node-renderer :vnodes="extraVnodes"></v-node-renderer>
      </div>
      <slot name="toolbar">
      </slot>
    </template>
    <template v-slot:classic-editor-body>
      <div class="svme-core-body">
        <div
          class="svme-core-edit"
          ref="edit"
          v-if="mode === 'edit' || mode === 'both'"
        ></div>
        <div
          class="svme-core-view"
          ref="view"
          v-html="html"
          v-if="mode === 'view' || mode === 'both'"
        ></div>
      </div>
    </template>
  </classic-editor-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, provide, computed } from 'vue'
import type { Ref, VNode } from 'vue'
import MarkdownIt from 'markdown-it'
import { escapeHtml } from 'markdown-it/lib/common/utils'
import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import ins from 'markdown-it-ins'
import br  from 'markdown-it-br'
import mark from 'markdown-it-mark'
import deflist from 'markdown-it-deflist'
// import emoji from 'markdown-it-emoji/bare.js'
import { EditorView, minimalSetup } from 'codemirror'
import { keymap, lineNumbers } from '@codemirror/view'
import { EditorSelection } from '@codemirror/state'
import { markdown } from '@codemirror/lang-markdown'
import { undo, redo } from '@codemirror/commands'
import { indentWithTab } from "@codemirror/commands"
import type { CorePlugin }  from '../CorePlugin'
import { CorePluginManager } from '../CorePlugin'
import ClassicEditorLayout from './ClassicEditorLayout.vue'
import VNodeRenderer from '../utils/VNodeRenderer.vue'
import type { CmPasteEventHandlerMap, CoreContext, MditCodeRendererMap, MditInitOptions, MditLoadPlugin } from './types'

export interface CoreEditorProps {
  modelValue: string,
  mode: 'edit' | 'view' | 'both',
  height?: string,
  plugins?: CorePlugin[],
}

const props = withDefaults(defineProps<CoreEditorProps>(), {
  modelValue: '',
  mode: 'edit',
  height: '30em',
  plugins: () => {
    return []
  },
})

const emit = defineEmits(['update:modelValue'])

const html: Ref<string> = ref('')
const edit = ref<HTMLElement | null>(null)
const view = ref<HTMLElement | null>(null)
const pluginManager = new CorePluginManager()
pluginManager.registerPlugins(props.plugins)
const extraVnodes = computed<VNode[]>(() => {
  return pluginManager.getExtraVnodes()
})

// -------------------------------- initialize markdownIt ---------------------------------------------
interface MarkdownItData {
  instance: any,
  initOptions: MditInitOptions,
  loadPlugins: MditLoadPlugin[],
  codeRendererMap: MditCodeRendererMap,
}
const markdownIt: MarkdownItData = {
  instance: null,
  initOptions: {
    breaks: true,
    highlight: renderCode,
    ...pluginManager.getMditInitOptions()
  },
  loadPlugins: [
    [ sup ],
    [ sub ],
    [ ins ],
    [ br ],
    [ mark ], 
    [ deflist ],
    ...pluginManager.getMditLoadPlugins()
  ],
  codeRendererMap: {...pluginManager.getMditCodeRendererMap()}
}

function renderCode(code: string, lang: string): string {
  if (lang.length === 0 && code.length === 0) {
    return '<pre class="nothing"></pre>'
  }

  if (markdownIt.codeRendererMap[lang]) {
    return markdownIt.codeRendererMap[lang](code, lang)
  }

  if (markdownIt.codeRendererMap['default']) {
    return markdownIt.codeRendererMap['default'](code, lang)
  }

  return `<pre class="language-${lang}"><code>${escapeHtml(code)}</code></pre>`
}

function renderView(): void {
  pluginManager.mditBeforeRender()
  html.value = markdownIt.instance.render(props.modelValue)
  pluginManager.mditAfterRender()
}

markdownIt.instance = new MarkdownIt(markdownIt.initOptions)
markdownIt.loadPlugins.forEach((params: any) => {
  markdownIt.instance.use(...params)
})
Object.assign(markdownIt.instance.renderer.rules, pluginManager.getMditRendererRuleMap())

watch(
  () => props.modelValue, 
  () => {
    renderView()
  }, 
  {
    immediate: true
  }
)

// -------------------------------- initialize codeMirror ---------------------------------------------
interface CodeMirrorData {
  editorView: null | EditorView,
  scrollTop: number,
  pasteEventHandlerMap: CmPasteEventHandlerMap
}
const codeMirror: CodeMirrorData = {
  editorView: null,
  scrollTop: 0,
  pasteEventHandlerMap: pluginManager.getCmPasteEventHandlerMap()
}
function scrollHandler() {
  setTimeout(() => {
    const leftScrollHeight = codeMirror.editorView!.scrollDOM.scrollHeight
    const leftScrollTop    = codeMirror.editorView!.scrollDOM.scrollTop
    const leftScrollOffset = leftScrollTop - codeMirror.scrollTop
    const rightScrollHeight = view.value!.scrollHeight
    const rightScrollTop = view.value!.scrollTop
    view.value!.scrollTop = rightScrollTop + (rightScrollHeight * leftScrollOffset / leftScrollHeight)
    codeMirror.scrollTop = leftScrollTop 
  }, 0)
}
function pasteHandler(cevent: ClipboardEvent) {
  if(cevent.clipboardData?.items) {
    for (const item of cevent.clipboardData.items) {
      if (codeMirror.pasteEventHandlerMap[item.type]) {
        (codeMirror.pasteEventHandlerMap[item.type])(item)
      }
      if (item.type === 'text/plain') {
        item.getAsString((text: string) => {
          insertOrReplace(text)
        })
      }
    }
  }
}
onMounted(() => {
  codeMirror.editorView = new EditorView({
    doc: props.modelValue,
    extensions: [
      ...pluginManager.getCmExtensions(),
      minimalSetup,
      lineNumbers(),
      keymap.of([indentWithTab]),
      markdown(pluginManager.getCmMarkdownConfig()),
      EditorView.lineWrapping,
      EditorView.updateListener.of((viewUpdate) => {
        if (viewUpdate.docChanged) {
          const doc = viewUpdate.state.doc.toString()
          emit('update:modelValue', doc)
          pluginManager.cmDocChanged(doc)
        }
      }),
      EditorView.domEventHandlers({
        scroll: scrollHandler,
        paste: pasteHandler,
        ...pluginManager.getCmDomEventHandlerMap(),
      }),
    ],
    parent: edit.value!
  })
})

// --------------------------------------- insertOrReplace ---------------------------------------------

/**
 * insert at the cursor or replace the selection.
 * @param {string} text
 * @param {boolean} forceNewLine whether to insert a newline when the cursor is not at the beginning of a line.
 */
function insertOrReplace(text: string, forceNewLine: boolean = false) {
  if (!codeMirror.editorView) {
    console.log("the codemirror's instance is not created.")
    return
  }

  const keyword = '<-->'
  const selectionRange = codeMirror.editorView.state.selection.ranges[0]
  const selectedText = codeMirror.editorView.state.sliceDoc(selectionRange.from, selectionRange.to)
  let insertText = text.replace(keyword, selectedText)
  let newCursorPos = selectionRange.from === selectionRange.to && text.indexOf(keyword) >= 0
                      ? selectionRange.from + text.indexOf(keyword)
                      : selectionRange.from + insertText.length
  const prevChar = selectionRange.from > 0
                  ? codeMirror.editorView.state.doc.toString().charAt(selectionRange.from - 1)
                  : null
  if (forceNewLine && prevChar !== '\n' && prevChar !== null) {
    insertText = '\n' + insertText
    newCursorPos += 1
  }

  codeMirror.editorView.dispatch({
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

// --------------------------------------- command ---------------------------------------------
const commandMap: { [key: string]: (params: any) => void } = {
  undo: () => {
    codeMirror.editorView && undo(codeMirror.editorView)
  },
  redo: () => {
    codeMirror.editorView && redo(codeMirror.editorView)
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


// --------------------------------------- getCoreContext ---------------------------------------------
function getCoreContext(): CoreContext {
  const context: CoreContext = {
    methods: {
      insertOrReplace,
      command,
    },
    doms: {
      edit,
      view
    },
    props
  }
  return context
}

provide('getCoreContext', getCoreContext)

// ------------------------------------------- expose ------------------------------------------------
defineExpose({ insertOrReplace, command, getCoreContext })

</script>

<style scoped>
.svme-core-extra {
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
  position: absolute;
  left: 0;
  top: 0;
}

.svme-core-body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.svme-core-edit, .svme-core-view {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
  flex-grow: 0;
  flex-shrink: 0;
  overflow-y: auto;
  box-sizing: border-box;
}

.svme-core-edit {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  scrollbar-width: thin;
  height: 100%;
  padding: 0;
}

.svme-core-view {
  padding: 1em;
}

.svme-core-mode-both .svme-core-edit {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  width: 50%;
}

.svme-core-mode-both .svme-core-view {
  width: 50%;
}
</style>

<style>
.cm-editor {
  height: 100%;
}

.svme-core-view {
  padding: 1em;
}

.svme-core-view table {
  border-spacing: 0;
  width: auto;
  overflow: auto;
  word-break: normal;
  word-break: keep-all;
  margin: 1.75em 0;
  border: 1px solid teal;
  border-radius: 0.45em;
  border-collapse: separate;
  font-size: 0.85em;
  overflow: hidden;
}

.svme-core-view table th {
  background-color: #eaf3f3;
  color: teal;
  font-weight: bold;
  text-align: left;
}

.svme-core-view td, .svme-core-view th {
  padding: 0.5em 1em;
  border: 0;
  height: 2em;
  min-width: 4em;
}

.svme-core-view tr:nth-child(2n) {
  background-color: #0000000d;
}

.svme-core-view tr td:not(:last-child) {
  border-right: 1px solid lightgray;
}

.svme-core-view tr th:not(:last-child) {
  border-right: 1px solid lightgray;
}

.svme-core-view tr:hover td {
  background-color: #eaf3f3;
}

.svme-core-view img {
  max-width: 100%;
}

.svme-core-view img.emoji {
  display: inline;
  border: 0;
  width: 1em;
  height: 1em;
  padding: 0;
  margin: 0;
}

.svme-core-view a {
  color: teal;
  font-weight: 600;
  text-decoration: none;
}

.svme-core-view a:hover {
  text-decoration: underline;
}

.svme-core-view a > code {
  color: #476582;
  text-decoration: none;
}

.svme-core-view p {
  line-height: 1.6em;
  letter-spacing: 0.2px;
}

.svme-core-view strong {
  color: saddlebrown;
  font-weight: bold;
}

.svme-core-view mark {
  padding: 0.15em 0.5em;
}

.svme-core-view blockquote {
  margin: 2em 0;
  padding-left: 20px;
  border-left: 4px solid teal;
}

.svme-core-view ul {
  margin: 0.5em 0;
}

.svme-core-view h1 {
  margin: 0 0 3rem;
  font-size: 2.4em;
  line-height: 1.4em;
  font-weight: 600;
  padding-bottom: 0.7em;
  border-bottom: 2px solid #ddd;
}

.svme-core-view h2 {
  font-size: 1.5em;
  font-weight: 600;
  margin: 2.8em 0 0.8em;
  padding-bottom: 0.7em;
  border-bottom: 1px solid #ddd;
}

.svme-core-view h3 {
  font-size: 1.2em;
  font-weight: 600;
  margin: 3rem 0 1.25rem 0;
}

.svme-core-view h4 {
  font-size: 1em;
  margin: 1em 0;
}

.svme-core-view h5 {
  font-size: 0.85em;
  margin: 1em 0;
}

.svme-core-view h6 {
  font-size: 0.7em;
  margin: 1em 0;
}

.svme-core-view hr {
  border-left: 0;
  border-right: 0;
}

.svme-core-view .nothing {
  display: none;
}
</style>