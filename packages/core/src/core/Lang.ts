import get from 'lodash/get'
import merge from 'lodash/merge'
import type { MessageMap, VariableMap } from './types'

export class Lang {
  messageMap: MessageMap
  locale: string
  fallbackLocale: string

  constructor() {
    this.messageMap = {}
    this.locale = 'en'
    this.fallbackLocale = 'en'
    this.merge = this.merge.bind(this)
    this.t = this.t.bind(this)
    this.print = this.print.bind(this)
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
    let msg = get(this.messageMap, `${this.locale}.${path}`)

    if (typeof msg !== 'string') {
      msg = get(this.messageMap, `${this.fallbackLocale}.${path}`)
    }

    if (typeof msg !== 'string') {
      return path
    }

    for (const key in varMap) {
      const pattern = new RegExp(`{${key}}`, 'g')
      msg = (msg as string).replace(pattern, varMap[key])
    }

    return msg
  }

  setLocale(locale: string) {
    this.locale = locale
  }

  setFallbackLocale(fallbackLocale: string) {
    this.fallbackLocale = fallbackLocale
  }

  print() {
    console.log(this.messageMap)
  }
}