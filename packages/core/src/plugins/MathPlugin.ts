import type { MditLoadPlugin, Plugin } from '../core/types'
import katex from 'katex'
import mditMath from 'markdown-it-math'

class MathPlugin implements Plugin {
  name: string = 'core-plugin-math'
  mditLoadPlugins?: MditLoadPlugin[]

  constructor(options: Object) {
    this.mditLoadPlugins = [
      [mditMath, {
        inlineOpen: '$',
        inlineClose: '$',
        blockOpen: '$$',
        blockClose: '$$',
        renderingOptions: {},
        inlineRenderer: function(str: string) {
          return katex.renderToString(str, {
            throwOnError: false
          })
        },
        blockRenderer: function(str: string) {
          return katex.renderToString(str, {
            throwOnError: false
          })
        },
        ...options
      }]
    ]
  }
}

function math(options: Object = {}) {
  return new MathPlugin(options)
}

export default math