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
  editorWrapper: Wrapper
  viewerWrapper: Wrapper
  editorScrollEl: Ref<HTMLElement | null>
  viewerScrollEl: Ref<HTMLElement | null>
  css: string

  constructor(editorProps: {[key: string]: any}, viewerProps: {[key: string]: any}) {
    this.editorScrollEl = ref(null)
    this.viewerScrollEl = ref(null)

    const defaultEditProps = {
      options: {
        scrollbars: {
          clickScroll: true,
          autoHide: 'leave'
        }
      },
      onOsInitialized: (instance: any) => {
        const elems = instance.elements()
        this.editorScrollEl.value = elems.viewport
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
        this.viewerScrollEl.value = elems.viewport
      },
      defer: true
    }

    const clonedEditProps = Object.assign({}, editorProps)
    const mergedEditProps = merge(clonedEditProps, defaultEditProps)
    const clonedViewProps = Object.assign({}, viewerProps)
    const mergedViewProps = merge(clonedViewProps, defaultViewProps)

    this.editorWrapper = [OverlayScrollbarsComponent, mergedEditProps, 'editOverlayScrollbars']
    this.viewerWrapper = [OverlayScrollbarsComponent, mergedViewProps, 'viewOverlayScrollbars']
    this.css = '&root [data-overlayscrollbars-initialize] { height: 100%;}'
  }
}

function overlayScrollbars(editorProps: {[key: string]: any} = {}, viewerProps: {[key: string]: any} = {}) {
  return new OverlayScrollbarsPlugin(editorProps, viewerProps)
}

export default overlayScrollbars