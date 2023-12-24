import { onMounted, watch } from 'vue'
import type { FnGetContext, Plugin } from '../core/types'

class SyncScrollbarPlugin implements Plugin {
  readonly name = 'core-plugin-sync-scrollbar'

  init(getContext: FnGetContext) {
    onMounted(() => {
      const context = getContext()
      const editScrollElm = context.doms.editScroll
      const viewScrollElm = context.doms.viewScroll

      let editPrevScrollTop = 0
      watch(editScrollElm, () => {
        if (editScrollElm.value) {
          editScrollElm.value.addEventListener('scroll', () => {
            if (!editScrollElm.value) {
              return
            }

            const editCurScrollTop = editScrollElm.value.scrollTop
            const editScrollHeight = editScrollElm.value.scrollHeight
            const editClientHeight = editScrollElm.value.clientHeight
            const editScrollOffsetPercent = (editCurScrollTop - editPrevScrollTop) / (editScrollHeight - editClientHeight)
            editPrevScrollTop = editCurScrollTop

            if (viewScrollElm.value) {
              const viewScrollHeight = viewScrollElm.value.scrollHeight
              const viewClientHeight = viewScrollElm.value.clientHeight
              viewScrollElm.value.scrollTop = viewScrollElm.value.scrollTop + editScrollOffsetPercent * (viewScrollHeight - viewClientHeight)
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