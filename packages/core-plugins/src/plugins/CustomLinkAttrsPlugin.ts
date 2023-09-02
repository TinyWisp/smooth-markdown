import type { CorePlugin, MditLoadPlugin, MditTokenAttrMap, MditTokenAttrs, MditTokenAttr } from '@smooth-vue-markdown-editor/core'

export type FnCustomLinkAttrs = (oldAttrMap: MditTokenAttrMap) => MditTokenAttrMap

/**
 * customize a link's attributes, like src, title, referer and so on.
 */
class CustomLinkAttrsPlugin implements CorePlugin {
  name: string = 'core-plugin-custom-link-attrs'
  mditLoadPlugins: MditLoadPlugin[]

  constructor(fnCustomLinkAttrs: FnCustomLinkAttrs) {
    this.mditLoadPlugins = []
    this.mditLoadPlugins.push([this.mditCustomLinkAttrs, {
      fnCustomLinkAttrs,
    }])
  }

  mditCustomLinkAttrs(md: any, configs: any) {
    const orgLinkOpenRenderer = md.renderer.rules.link_open 
        ? md.renderer.rules.link_open.bind(md.renderer.rules)
        : md.renderer.renderToken.bind(md.renderer)
    const fnCustomLinkAttrs = configs.fnCustomLinkAttrs

    if (!fnCustomLinkAttrs) {
      return
    }

    md.renderer.rules.link_open = function (tokens: any[], idx: number, options: any, env: any, self: any) {
      const token = tokens[idx]
      const isSimpleLink = tokens?.[idx + 1]?.type === 'text' && tokens?.[idx + 2]?.type === 'link_close'

      const oldAttrs = token.attrs as MditTokenAttrs
      const oldAttrMap: MditTokenAttrMap = {}
      oldAttrs.forEach((attr: MditTokenAttr) => {
        const key = attr[0]
        const val = attr[1]
        oldAttrMap[key] = val
      })
      if (isSimpleLink) {
        oldAttrMap.title = tokens[idx + 1].content
      }

      const newAttrMap = fnCustomLinkAttrs(oldAttrMap)
      const newTitle = newAttrMap.title
      const newAttrs: MditTokenAttrs = []
      delete newAttrMap.title
      if (newAttrMap) {
        for (const key in newAttrMap) {
          newAttrs.push([key, newAttrMap[key]])
        }
      }
      tokens[idx]['attrs'] = newAttrs
      if (isSimpleLink && newTitle && newTitle !== oldAttrMap.title) {
        tokens[idx + 1].content = newTitle
      }

      return orgLinkOpenRenderer(tokens, idx, options, env, self)
    }
  }
}

function customLinkAttrs(fnCustomLinkAttrs: FnCustomLinkAttrs) {
  return new CustomLinkAttrsPlugin(fnCustomLinkAttrs)
}

export default customLinkAttrs
