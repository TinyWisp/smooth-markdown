import {
  markdownItPlugins,
  overlayScrollbars,
  math,
  customCodeBlockRenderer,
  defaultEditorTheme,
  defaultViewerTheme,
  tocSpy,
  syncScrollbars,
  highlightCodeBlocksInEditableArea,
  codemirrorExt
} from '@smooth-markdown/core/plugins'
import { MermaidRenderer, KatexRenderer, CodeMirrorRenderer } from '@smooth-markdown/core/renderers'
import type { Plugin } from '@smooth-markdown/core'
import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import ins from 'markdown-it-ins'
import br  from 'markdown-it-br'
import mark from 'markdown-it-mark'
import deflist from 'markdown-it-deflist'
import taskLists from 'markdown-it-task-lists'
import footnote from 'markdown-it-footnote'
import mialert from 'markdown-it-alert'
import { EditorView, lineNumbers, highlightActiveLine, highlightActiveLineGutter } from '@codemirror/view'
import { foldGutter } from '@codemirror/language'

const basicSetup: Plugin[] = [
  markdownItPlugins([
    [ sup ],
    [ sub ],
    [ ins ],
    [ br ],
    [ mark ],
    [ deflist ],
    [ taskLists ],
    [ footnote ],
    [ mialert ]
  ]),
  customCodeBlockRenderer({
    math: [KatexRenderer],
    mermaid: [MermaidRenderer],
    default: [CodeMirrorRenderer]
  }),
  codemirrorExt([
    EditorView.lineWrapping,
    lineNumbers(),
    highlightActiveLine(),
    highlightActiveLineGutter(),
    foldGutter()
  ]),
  overlayScrollbars(),
  math(),
  tocSpy()
]

export default basicSetup