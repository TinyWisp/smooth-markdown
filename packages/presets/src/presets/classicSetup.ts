import {
  markdownItPlugins,
  overlayScrollbars,
  math,
  customCodeBlockRenderer,
  defaultEditorTheme,
  defaultViewerTheme,
  tocSpy,
  syncScrollbars,
  highlightCodeBlocksInEditableArea
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
  overlayScrollbars(),
  math(),
  defaultEditorTheme(),
  defaultViewerTheme(),
  tocSpy(),
  syncScrollbars(),
  highlightCodeBlocksInEditableArea()
]

export default classicSetup