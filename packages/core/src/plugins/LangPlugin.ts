import type { Plugin, MessageMap } from '../core/types'

class LangPlugin implements Plugin {
  name: string = 'lang'
  messageMap: MessageMap

  constructor(messageMap: MessageMap) {
    this.messageMap = messageMap
  }
}

function lang(messageMap: MessageMap) {
  return new LangPlugin(messageMap)
}

export default lang