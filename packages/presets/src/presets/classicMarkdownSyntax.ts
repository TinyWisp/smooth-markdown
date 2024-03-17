import { markdownItPlugin } from '@smooth-markdown/core/plugins'
import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import ins from 'markdown-it-ins'
import br  from 'markdown-it-br'
import mark from 'markdown-it-mark'
import deflist from 'markdown-it-deflist'
import taskLists from 'markdown-it-task-lists'
import footnote from 'markdown-it-footnote'
import alert from 'markdown-it-alert'

const classicMarkdownSyntax = [
  markdownItPlugin([ sup ]),
  markdownItPlugin([ sub ]),
  markdownItPlugin([ ins ]),
  markdownItPlugin([ br ]),
  markdownItPlugin([ mark ]),
  markdownItPlugin([ deflist ]),
  markdownItPlugin([ taskLists ]),
  markdownItPlugin([ footnote ]),
  markdownItPlugin([ alert ])
]

export default classicMarkdownSyntax