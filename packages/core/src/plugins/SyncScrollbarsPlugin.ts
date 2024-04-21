import { type Ref, watch } from 'vue'
import type { FnGetContext, Plugin } from '../core/types'

type SyncWay = 'editor-to-viewer' | 'viewer-to-editor' | 'two-way' 

class SyncScrollbarsPlugin implements Plugin {
  readonly name = 'core-plugin-sync-scrollbars'
  way: SyncWay

  oneWay(srcScrollEl: Ref<HTMLElement|null>, desScrollEl: Ref<HTMLElement|null>) {
    let srcPrevScrollTop = 0
    watch(srcScrollEl, () => {
      if (srcScrollEl.value) {
        srcScrollEl.value.addEventListener('scroll', () => {
          if (!srcScrollEl.value) {
            return
          }

          const srcCurScrollTop = srcScrollEl.value.scrollTop
          const srcScrollHeight = srcScrollEl.value.scrollHeight
          const srcClientHeight = srcScrollEl.value.clientHeight
          const srcScrollOffsetPercent = (srcCurScrollTop - srcPrevScrollTop) / (srcScrollHeight - srcClientHeight)
          srcPrevScrollTop = srcCurScrollTop

          if (desScrollEl.value) {
            const desScrollHeight = desScrollEl.value.scrollHeight
            const desClientHeight = desScrollEl.value.clientHeight
            desScrollEl.value.scrollTop = desScrollEl.value.scrollTop + srcScrollOffsetPercent * (desScrollHeight - desClientHeight)
          }
        })
      }
    }, { immediate: true})
  }

  twoWay(editorScrollEl: Ref<HTMLElement|null>, viewerScrollEl: Ref<HTMLElement|null>) {
    let isEditorScrolling = false
    let isViewerScrolling = false
    let isEditorMaster = false
    let isViewerMaster = false
    let editorScrollEndTimer: NodeJS.Timeout | number | null = null
    let viewerScrollEndTimer: NodeJS.Timeout | number | null = null

    const editorScrollHandler = () => {
      isEditorScrolling = true
      if (!isViewerScrolling) {
        isEditorMaster = true
      }

      if (isEditorMaster && editorScrollEl.value && viewerScrollEl.value) {
        const percent = editorScrollEl.value.scrollTop / (editorScrollEl.value.scrollHeight - editorScrollEl.value.clientHeight)
        viewerScrollEl.value.scrollTop = (viewerScrollEl.value.scrollHeight - viewerScrollEl.value.clientHeight) * percent;
      }

      if (editorScrollEndTimer) {
        clearTimeout(editorScrollEndTimer)
      }
      editorScrollEndTimer = setTimeout(() => {
        editorScrollEndTimer = null
        isEditorScrolling = false
        isEditorMaster = false
      }, 100)
    }

    const viewerScrollHandler = () => {
      isViewerScrolling = true
      if (!isEditorScrolling) {
        isViewerMaster = true
      }
      if (isViewerMaster && editorScrollEl.value && viewerScrollEl.value) {
        const percent = viewerScrollEl.value.scrollTop / (viewerScrollEl.value.scrollHeight - viewerScrollEl.value.clientHeight)
        editorScrollEl.value.scrollTop = (editorScrollEl.value.scrollHeight - editorScrollEl.value.clientHeight) * percent;
      }

      if (viewerScrollEndTimer) {
        clearTimeout(viewerScrollEndTimer)
      }
      viewerScrollEndTimer = setTimeout(() => {
        viewerScrollEndTimer = null
        isViewerScrolling = false
        isViewerMaster = false
      }, 100)
    }

    watch(editorScrollEl, () => {
      editorScrollEl.value && editorScrollEl.value.addEventListener('scroll', editorScrollHandler)
      if (editorScrollEl.value && viewerScrollEl.value) {
        const percent = viewerScrollEl.value.scrollTop / (viewerScrollEl.value.scrollHeight - viewerScrollEl.value.clientHeight)
        editorScrollEl.value.scrollTop = (editorScrollEl.value.scrollHeight - editorScrollEl.value.clientHeight) * percent;
      }
    })

    watch(viewerScrollEl, () => {
      viewerScrollEl.value && viewerScrollEl.value.addEventListener('scroll', viewerScrollHandler)
      if (editorScrollEl.value && viewerScrollEl.value) {
        const percent = editorScrollEl.value.scrollTop / (editorScrollEl.value.scrollHeight - editorScrollEl.value.clientHeight)
        viewerScrollEl.value.scrollTop = (viewerScrollEl.value.scrollHeight - viewerScrollEl.value.clientHeight) * percent;
      }
    })
  }

  constructor(way: SyncWay) {
    this.way = way
  }

  init(getContext: FnGetContext) {
    const context = getContext!()
    const editorScrollEl = context.editor.scrollEl!
    const viewerScrollEl = context.viewer.scrollEl!

    if (this.way === 'editor-to-viewer') {
      this.oneWay(editorScrollEl, viewerScrollEl)
    } else if (this.way === 'viewer-to-editor') {
      this.oneWay(viewerScrollEl, editorScrollEl)
    } else {
      this.twoWay(editorScrollEl, viewerScrollEl)
    }
  }
}


export default function syncScrollbars(way: SyncWay = 'editor-to-viewer') {
  return new SyncScrollbarsPlugin(way)
}