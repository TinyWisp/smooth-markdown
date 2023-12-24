import { OverlayScrollbarsComponent } from "overlayscrollbars-vue"
import { ClickScrollPlugin, OverlayScrollbars, ScrollbarsHidingPlugin } from "overlayscrollbars"
import merge from 'lodash/merge'
import type { FnGetContext, FnSetContext, Plugin, Wrapper } from '../core/types'
import 'overlayscrollbars/overlayscrollbars.css'
import { ref, type Ref } from "vue"

OverlayScrollbars.plugin(ClickScrollPlugin)
OverlayScrollbars.plugin(ScrollbarsHidingPlugin)

class OverlayScrollbarsPlugin implements Plugin {
  name: string = 'core-plugin-overlay-scrollbars'
  editWrapper: Wrapper
  viewWrapper: Wrapper
  editScrollElm: Ref<HTMLElement | null>
  viewScrollElm: Ref<HTMLElement | null>
  css: string

  constructor(editProps: {[key: string]: any}, viewProps: {[key: string]: any}) {
    this.editScrollElm = ref(null)
    this.viewScrollElm = ref(null)

    const defaultEditProps = {
      options: {
        scrollbars: {
          clickScroll: true,
          autoHide: 'leave'
        }
      },
      onOsInitialized: (instance: any) => {
        const elems = instance.elements()
        this.editScrollElm.value = elems.viewport
      },
      defer: true
    }

    const defaultViewProps = {
      options: {
        scrollbars: {
          clickScroll: true,
          autoHide: 'leave'
        }
      },
      onOsInitialized: (instance: any) => {
        const elems = instance.elements()
        this.viewScrollElm.value = elems.viewport
      },
      defer: true
    }

    const clonedEditProps = Object.assign({}, editProps)
    const mergedEditProps = merge(clonedEditProps, defaultEditProps)
    const clonedViewProps = Object.assign({}, viewProps)
    const mergedViewProps = merge(clonedViewProps, defaultViewProps)

    this.editWrapper = [OverlayScrollbarsComponent, mergedEditProps, 'editOverlayScrollbars']
    this.viewWrapper = [OverlayScrollbarsComponent, mergedViewProps, 'viewOverlayScrollbars']
    this.css = '&root [data-overlayscrollbars-initialize] { height: 100%;}'
  }
}

function overlayScrollbars(editProps: {[key: string]: any} = {}, viewProps: {[key: string]: any} = {}) {
  return new OverlayScrollbarsPlugin(editProps, viewProps)
}

export default overlayScrollbars