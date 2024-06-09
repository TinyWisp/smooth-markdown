import { githubLightInit } from '@uiw/codemirror-theme-github'
import { tags as t } from '@lezer/highlight'
import type { Plugin } from '../core/types'

export default function defaultEditorTheme(): Plugin {
  const codemirrorExt = githubLightInit({
      settings: {
        gutterBackground: '#f7f7f7',
        fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
      },
      styles: [
        {tag: t.heading, color: 'steelblue', fontWeight: 'bold'},
        {tag: t.list, color: '#0055aa'},
        {tag: t.meta, color: 'sienna'},
        {tag: t.url, color: '#090'},
        {tag: t.quote, color: '#090'},
        {tag: t.monospace, color: 'sienna'},
      ]
    })

  return {
    name: 'core-plugin-default-editor-theme',
    cmExtensions: [ codemirrorExt ]
  }
}