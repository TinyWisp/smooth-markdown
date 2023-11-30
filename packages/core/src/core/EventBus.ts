export interface EventMap {
  [src: string]: {
    [event: string]: Function[]
  }
}

export class EventBus {
  eventMap: EventMap
  logEvent: boolean

  constructor() {
    this.eventMap = {}
    this.logEvent = false
  }

  fire(src: string, event: string, detail: any) {
    if (this.logEvent) {
      console.log(`an event fired.  source:${src} event:${event} detail: `, detail)
    }

    if (Array.isArray(this.eventMap?.[src]?.[event])) {
      this.eventMap[src][event].forEach((func) => {
        func(detail)
      })
    }
  }

  on(src: string, event: string, func: Function) {
    if (!this.eventMap[src]) {
      this.eventMap[src] = {}
    }

    if (!this.eventMap[src][event]) {
      this.eventMap[src][event] = []
    }

    this.eventMap[src][event].push(func)
  }

  off(src: string, event: string, func: Function) {
    if (!Array.isArray(this.eventMap?.[src]?.[event])) {
      return
    }

    const funcList = this.eventMap[src][event]
    for (let i=0; i<funcList.length; i++) {
      if (funcList[i] === func) {
        funcList.splice(i, 1)
        return
      }
    }
  }

  beginLogEvent() {
    this.logEvent = true
  }

  endLogEvent() {
    this.logEvent = false
  }
}