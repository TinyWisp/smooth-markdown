import { onMounted, watch } from 'vue'
import type { FnGetContext, Plugin } from '../core/types'

class SyncScrollbarPlugin implements Plugin {
  readonly name = 'core-plugin-sync-scrollbar'

  init(getContext: FnGetContext) {
    onMounted(() => {
      const context = getContext()
      const editorScrollEl = context.editor.scrollEl!
      const viewerScrollEl = context.viewer.scrollEl!

      let editPrevScrollTop = 0
      watch(editorScrollEl, () => {
        if (editorScrollEl.value) {
          editorScrollEl.value.addEventListener('scroll', () => {
            if (!editorScrollEl.value) {
              return
            }

            const editCurScrollTop = editorScrollEl.value.scrollTop
            const editScrollHeight = editorScrollEl.value.scrollHeight
            const editClientHeight = editorScrollEl.value.clientHeight
            const editScrollOffsetPercent = (editCurScrollTop - editPrevScrollTop) / (editScrollHeight - editClientHeight)
            editPrevScrollTop = editCurScrollTop

            if (viewerScrollEl.value) {
              const viewScrollHeight = viewerScrollEl.value.scrollHeight
              const viewClientHeight = viewerScrollEl.value.clientHeight
              viewerScrollEl.value.scrollTop = viewerScrollEl.value.scrollTop + editScrollOffsetPercent * (viewScrollHeight - viewClientHeight)
            }
          })
        }
      }, { immediate: true})
    })
  }
}


export default function syncScrollbar() {
  return new SyncScrollbarPlugin()
}