import get from 'lodash/get'
import merge from 'lodash/merge'
import type { MessageMap, VariableMap } from './types'
import { ref, reactive, type Ref } from 'vue'

export class Lang {
  messageMap: MessageMap
  locale: Ref<string>
  fallbackLocale: Ref<string>

  constructor() {
    this.messageMap = reactive({})
    this.locale = ref('en')
    this.fallbackLocale = ref('en')
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
    let msg = get(this.messageMap, `${this.locale.value}.${path}`)

    if (typeof msg !== 'string') {
      msg = get(this.messageMap, `${this.fallbackLocale.value}.${path}`)
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
    this.locale.value = locale
  }

  setFallbackLocale(fallbackLocale: string) {
    this.fallbackLocale.value = fallbackLocale
  }

  print() {
    console.log(this.messageMap)
  }
}