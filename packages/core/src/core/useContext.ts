import type { Context } from './types'


class ContextManager {
  context: Context

  constructor() {
    this.context = {
      methods: {},
      doms: {},
      selectors: {},
      data: {},
      instances: {},
      others: {}
    }
  }

  setContext(key: keyof Context, subKey: string, val: any) {
    this.context[key][subKey] = val
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