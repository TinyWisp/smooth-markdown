import { markdownItPlugin } from '@smooth-markdown/core/plugins'
import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import ins from 'markdown-it-ins'
import br  from 'markdown-it-br'
import mark from 'markdown-it-mark'
import deflist from 'markdown-it-deflist'
import taskLists from 'markdown-it-task-lists'
import footnote from 'markdown-it-footnote'

const basicMarkdownSyntax = [
  markdownItPlugin([
    [ sup ],
    [ sub ],
    [ ins ],
    [ br ],
    [ mark ], 
    [ deflist ],
    [ taskLists ],
    [ footnote ]
  ])
]

export { basicMarkdownSyntax }