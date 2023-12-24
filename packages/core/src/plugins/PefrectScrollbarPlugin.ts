import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import type { Plugin, Wrapper } from '../core/types'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

class PerfectScrollbarPlugin implements Plugin {
  name: string = 'core-plugin-perfect-scrollbar'
  editWrapper: Wrapper
  viewWrapper: Wrapper
  css: String

  constructor(props: {[key: string]: any}) {
    this.editWrapper = [PerfectScrollbar, props, 'editPerfectScrollbar']
    this.viewWrapper = [PerfectScrollbar, props, 'viewPerfectScrollbar']
    this.css = '&root .ps {height:  100%}'
  }
}

function perfectScrollbar(props: {[key: string]: any}) {
  return new PerfectScrollbarPlugin(props)
}

export default perfectScrollbar