export type CodeRenderer = (code: string, lang: string) => string

export interface CodeRendererMap {
  [key: string]: CodeRenderer
}

export type RendererRule = (tokens: any[], idx: number, options?: object, env?: object, slf?: object) => string

export interface RendererRuleMap {
  [key: string]: RendererRule
}

export interface CorePlugin {
  readonly name: string
  codeRendererMap?: CodeRendererMap
  rendererRuleMap?: RendererRuleMap
  beforeRenderView?: () => void
  afterRenderView?: () => void
}

export class CorePluginManager {
  plugins: CorePlugin[]

  constructor() {
    this.plugins = []
  }

  registerPlugins(plugins: CorePlugin[]) {
    plugins.forEach((plugin) => {
      this.registerPlugin(plugin)
    })
  }

  registerPlugin(plugin: CorePlugin): void {
    if (plugin.name.trim() === '') {
      console.log('an invalid plugin whose name is empty')
    }

    this.plugins.push(plugin)
  }

  unregisterPlugin(name: string): void {
    this.plugins = this.plugins.filter((plugin) => {
      return plugin.name !== name
    })
  }

  beforeRenderView(): void {
    this.plugins.forEach((plugin) => {
      plugin?.beforeRenderView?.()
    })
  }

  afterRenderView(): void {
    this.plugins.forEach((plugin) => {
      plugin?.afterRenderView?.()
    })
  }

  getCodeRendererMap(): CodeRendererMap {
    const codeRendererMap: CodeRendererMap = {}
    this.plugins.forEach((plugin) => {
      if (plugin.codeRendererMap) {
        for(const lang in plugin.codeRendererMap) {
          codeRendererMap[lang] = plugin.codeRendererMap[lang]
        }
      }
    })

    return codeRendererMap
  }

  getRendererRuleMap(): RendererRuleMap {
    const rendererRuleMap: RendererRuleMap = {}
    this.plugins.forEach((plugin) => {
      if (plugin.rendererRuleMap) {
        for (const ruleName in plugin.rendererRuleMap) {
          rendererRuleMap[ruleName] = plugin.rendererRuleMap[ruleName].bind(plugin)
        }
      }
    })

    return rendererRuleMap
  }
}