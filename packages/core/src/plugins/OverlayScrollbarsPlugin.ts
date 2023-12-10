import { onMounted } from "vue"
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue"
import { ClickScrollPlugin, OverlayScrollbars, ScrollbarsHidingPlugin } from "overlayscrollbars"
import merge from 'lodash/merge'
import type { FnGetContext, Plugin, Wrapper } from '../core/types'
import 'overlayscrollbars/overlayscrollbars.css'

OverlayScrollbars.plugin(ClickScrollPlugin)
OverlayScrollbars.plugin(ScrollbarsHidingPlugin)

class OverlayScrollbarsPlugin implements Plugin {
  name: string = 'core-plugin-overlay-scrollbars'
  editWrapper: Wrapper
  viewWrapper: Wrapper
  css: string
  getContext?: FnGetContext

  constructor(props: {[key: string]: any}) {
    const defaultProps = {
      options: {
        scrollbars: {
          clickScroll: true,
          autoHide: 'leave'
        }
      }
    }
    const clonedProps = JSON.parse(JSON.stringify(props))
    const mergedProps = merge(defaultProps, clonedProps)

    this.editWrapper = [OverlayScrollbarsComponent, mergedProps, 'editOverlayScrollbars']
    this.viewWrapper = [OverlayScrollbarsComponent, mergedProps, 'viewOverlayScrollbars']
    this.css = '& [data-overlayscrollbars-initialize] { height: 100%;}'
  }

  init() {
  }
}

function overlayScrollbars(props: {[key: string]: any}) {
  return new OverlayScrollbarsPlugin(props)
}

export default overlayScrollbars