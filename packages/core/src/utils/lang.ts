import get from 'lodash/get'
import merge from 'lodash/merge'

export interface MessageMap {
  [key: string]: string | MessageMap
}

export interface VariableMap {
  [key: string]: string
}


export class Lang {
  messageMap: MessageMap
  lang: string
  fallback: string

  constructor() {
    this.messageMap = {}
    this.lang = 'en'
    this.fallback = 'en'
  }

  merge(messageMap: MessageMap) {
    this.messageMap = merge(this.messageMap, messageMap)
  }

  /**
   * 
   * @param path 
   * @param varMap 
   * @returns 
   */
  t(path: string, varMap: VariableMap = {}): string {
    let msg = get(this.messageMap, `${this.lang}.${path}`)

    if (typeof msg !== 'string') {
      msg = get(this.messageMap, `${this.fallback}.${path}`)
    }

    if (typeof msg !== 'string') {
      return ''
    }

    for (const key in varMap) {
      const pattern = new RegExp(`{${key}}`, 'g')
      msg = (msg as string).replace(pattern, varMap[key])
    }

    return msg
  }

  print() {
    console.log(this.messageMap)
  }
}

const lang = new Lang()
const t = lang.t.bind(lang)

export { lang, t }