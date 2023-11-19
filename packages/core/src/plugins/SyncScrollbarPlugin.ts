import type { CoreContext, CorePlugin } from '../core/types'

class SyncScrollbarPlugin implements CorePlugin {
  readonly name = 'core-plugin-sync-scrollbar'
  viewDom: HTMLElement | null = null
  getCoreContext?: (() => CoreContext) | undefined

  cmScrollHandler(scrollHeight: number, scrollTop: number, scrollOffset: number) {
    if (!this.getCoreContext) {
      return
    }

    if (!this.viewDom) {
      const coreContext = this.getCoreContext()
      this.viewDom = coreContext.doms.view
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