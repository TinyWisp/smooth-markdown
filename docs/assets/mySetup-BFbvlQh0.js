const r=`import {
  markdownItPlugins,
  overlayScrollbars,
  math,
  customCodeBlockRenderer,
  tocSpy,
  syncScrollbars,
  highlightCodeBlocksInEditableArea,
  codemirrorExt,
  injectCss
} from '@smooth-markdown/core/plugins'
import { MermaidRenderer, KatexRenderer, CodeMirrorRenderer } from '@smooth-markdown/core/renderers'
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
import { solarizedDark } from 'cm6-theme-solarized-dark'
import css from './viewer.css?inline'

const classicSetup = [
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
    foldGutter(),
    solarizedDark
  ]),
  overlayScrollbars(),
  math(),
  tocSpy(),
  syncScrollbars(),
  highlightCodeBlocksInEditableArea(),
  injectCss(css)
]

export default classicSetup`;export{r as default};
