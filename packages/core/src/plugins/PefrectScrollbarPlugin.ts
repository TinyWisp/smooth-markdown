import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import type { Plugin, Wrapper } from '../core/types'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

class PerfectScrollbarPlugin implements Plugin {
  name: string = 'perfect-scrollbar'
  editorWrapper: Wrapper
  viewerWrapper: Wrapper
  css: String

  constructor(props: {[key: string]: any}) {
    this.editorWrapper = [PerfectScrollbar, props, 'editPerfectScrollbar']
    this.viewerWrapper = [PerfectScrollbar, props, 'viewPerfectScrollbar']
    this.css = '&root .ps {height:  100%}'
  }
}

function perfectScrollbar(props: {[key: string]: any}) {
  return new PerfectScrollbarPlugin(props)
}

export default perfectScrollbar