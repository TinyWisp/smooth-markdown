import { OverlayScrollbarsComponent } from "overlayscrollbars-vue"
import { ClickScrollPlugin, OverlayScrollbars, ScrollbarsHidingPlugin } from "overlayscrollbars"
import merge from 'lodash/merge'
import type { Plugin, Wrapper } from '../core/types'
import 'overlayscrollbars/overlayscrollbars.css'
import { ref, type Ref } from "vue"

OverlayScrollbars.plugin(ClickScrollPlugin)
OverlayScrollbars.plugin(ScrollbarsHidingPlugin)

type OverlayScrollbarsPluginProps = {
  editor?: false | {[key: string]: any}
  viewer?: false | {[key: string]: any}
  toc?: false | {[key: string]: any}
  codeBlock?: false | {[key: string]: any}
}

class OverlayScrollbarsPlugin implements Plugin {
  name: string = 'core-plugin-overlay-scrollbars'
  editorWrapper?: Wrapper
  viewerWrapper?: Wrapper
  tocWrapper?: Wrapper
  codeBlockWrapper?: Wrapper
  editorScrollEl?: Ref<HTMLElement | null>
  viewerScrollEl?: Ref<HTMLElement | null>
  tocScrollEl?: Ref<HTMLElement | null>
  css: string

  constructor(options: OverlayScrollbarsPluginProps = {}) {
    if (options.editor !== false) {
      this.setScroller(options.editor || {}, 'editorScrollEl', 'editorWrapper')
    }

    if (options.viewer !== false) {
      this.setScroller(options.viewer || {}, 'viewerScrollEl', 'viewerWrapper')
    }

    if (options.toc !== false) {
      this.setScroller(options.toc || {}, 'tocScrollEl', 'tocWrapper')
    }

    if (options.codeBlock !== false) {
      this.setScroller(options.codeBlock || {}, null, 'codeBlockWrapper')
    }

    this.css = `&root [data-overlayscrollbars-initialize] { height: 100%;}
    &root [data-overlayscrollbars-contents] { display: flex; }
    `
  }

  setScroller(props: {[key: string]: any}, scrollElKey: 'editorScrollEl' | 'viewerScrollEl' | 'tocScrollEl' | null, wrapperKey: 'editorWrapper' | 'viewerWrapper' | 'tocWrapper' | 'codeBlockWrapper') {
    if (scrollElKey) {
      this[scrollElKey] = ref(null)
    }
    const defaultEditorProps = {
      options: {
        scrollbars: {
          clickScroll: true,
          autoHide: 'leave'
        }
      },
      onOsInitialized: (instance: any) => {
        const elems = instance.elements()
        if (scrollElKey) {
          this[scrollElKey]!.value = elems.viewport
        }
      },
      defer: true
    }
    const clonedProps = Object.assign({}, props)
    const editorProps = merge(clonedProps, defaultEditorProps)
    this[wrapperKey] = [OverlayScrollbarsComponent, editorProps]
  }
}

function overlayScrollbars(options: OverlayScrollbarsPluginProps = {}) {
  return new OverlayScrollbarsPlugin(options)
}

export default overlayScrollbars