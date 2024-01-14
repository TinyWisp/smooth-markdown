import type { Context } from './types'


class ContextManager {
  context: Context

  constructor() {
    this.context = {
      viewer: {},
      editor: {},
      toc: {},
      header: {},
      body: {},
      root: {},
      others: {}
    }
  }

  setContext(...params: any[]) {
    if (params.length === 2) {
      const key = params[0] as string
      const val = params[1]
      this.context[key] = val
    }
    else if (params.length === 3) {
      const key = params[0] as string
      const subKey = params[1] as string
      const val = params[2]
      this.context[key][subKey] = val
    }
  }

  getContext(): Context {
    return this.context
  }
}

function useContext() {
  const contextManager = new ContextManager()

  return {
    getContext: contextManager.getContext.bind(contextManager),
    setContext: contextManager.setContext.bind(contextManager)
  }
}

export { useContext }