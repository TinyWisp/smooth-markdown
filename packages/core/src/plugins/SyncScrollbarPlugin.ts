import type { Context, Plugin } from '../core/types'

class SyncScrollbarPlugin implements Plugin {
  readonly name = 'core-plugin-sync-scrollbar'
  viewDom: HTMLElement | null = null
  getContext?: (() => Context) | undefined

  cmScrollHandler(scrollHeight: number, scrollTop: number, scrollOffset: number) {
    if (!this.getContext) {
      return
    }

    if (!this.viewDom) {
      const context = this.getContext()
      this.viewDom = context.doms.view
    }

    if (!this.viewDom) {
      return
    }

    if (this.viewDom.scrollHeight === this.viewDom.clientHeight) {
      return
    }

    const percent = scrollOffset / scrollHeight
    const newViewDomScrollTop = this.viewDom.scrollTop + (this.viewDom.scrollHeight * percent)
    this.viewDom.scrollTop = newViewDomScrollTop
  } 
}


export default function syncScrollbar() {
  return new SyncScrollbarPlugin()
}