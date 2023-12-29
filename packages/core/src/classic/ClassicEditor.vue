<template>
  <div 
    :class="['svme-root', `svme-mode-${mode}`]"
    :data-uniq-id="rootUniqId"
    ref="root"
  >
    <div class="svme-extra">
      <v-node-renderer :vnodes="extraVnodes"></v-node-renderer>
    </div>
    <div class="svme-header" ref="header">
      <element-wrapper :wrapper-list="toolbarWrapperList">
        <slot name="toolbar"></slot>
      </element-wrapper>
    </div>
    <div class="svme-body" ref="body">
      <div class="svme-edit-container" ref="editContainer" v-if="mode === 'both' || mode === 'edit'">
        <element-wrapper :wrapper-list="editWrapperList">
          <div
            :data-uniq-id="editUniqId"
            class="svme-edit"
            ref="edit"
          ></div>
        </element-wrapper>
      </div>
      <div class="svme-view-container" ref="viewContainer" v-if="mode === 'both' || mode === 'view'">
        <element-wrapper :wrapper-list="viewWrapperList">
          <div
            :data-uniq-id="viewUniqId"
            class="svme-view"
            ref="view"
          ></div>
        </element-wrapper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, type Ref, onMounted } from 'vue'
import { useCoreEditor } from '../core/useCoreEditor'
import VNodeRenderer from '../utils/VNodeRenderer.vue'
import ElementWrapper from '../utils/ElementWrapper.vue'
import type { Mode, Plugin } from '../core/types'
import insertCss from 'insert-css'
import { uniqId } from '../utils/util'
import { useContext } from '../core/useContext'

export interface EditorProps {
  modelValue: string
  mode: Mode
  showToolbar?: boolean
  plugins?: Plugin[]
}

const props = withDefaults(defineProps<EditorProps>(), {
  modelValue: '',
  mode: 'both',
  plugins: () => [],
})

const { getContext, setContext } = useContext()

// selectors
const rootUniqId = uniqId()
const editUniqId = uniqId()
const viewUniqId = uniqId()
const rootSelector = `[data-uniq-id=${rootUniqId}]`
const selectors: {[key:string]: string} = {
  root: rootSelector,
  edit: `[data-uniq-id=${editUniqId}]`,
  view: `[data-uniq-id=${viewUniqId}]`,
  header: `${rootSelector} > .svme-header`,
  body: `${rootSelector} > .svme-body`,
  editContainer: `${rootSelector} > .svme-body > .svme-edit-container`,
  viewContainer: `${rootSelector} > .svme-body > .svme-view-container`
}
Object.keys(selectors).forEach((key) => {
  setContext('selectors', key, selectors[key])
})

// doms
const edit: Ref<HTMLElement | null> = ref(null)
const view: Ref<HTMLElement | null> = ref(null)
const root: Ref<HTMLElement | null> = ref(null)
const header: Ref<HTMLElement | null> = ref(null)
const body: Ref<HTMLElement | null> = ref(null)
const editContainer: Ref<HTMLElement | null> = ref(null)
const viewContainer: Ref<HTMLElement | null> = ref(null)
setContext('doms', 'root', root)
setContext('doms', 'header', header)
setContext('doms', 'body', body)
setContext('doms', 'edit', edit)
setContext('doms', 'view', view)
setContext('doms', 'editContainer', editContainer)
setContext('doms', 'viewContainer', viewContainer)

// data
const doc: Ref<string> = ref(props.modelValue)
const mode: Ref<string> = ref(props.mode)
setContext('data', 'editorProps', props)
setContext('data', 'doc', doc)
setContext('data', 'mode', mode)

const emit = defineEmits(['update:modelValue', 'update:mode'])

const { 
  command,
  insertOrReplace,
  css,
  extraVnodes,
  toolbarWrapperList,
  editWrapperList,
  viewWrapperList
} = useCoreEditor({
  doc,
  editElem: edit,
  viewElem: view,
  plugins: props.plugins,
  getContext,
  setContext,
  editScrollElm: editContainer,
  viewScrollElm: viewContainer
})

watch(doc, () => {
  emit('update:modelValue', doc.value)
})

watch(mode, () => {
  emit('update:mode', mode.value)
})

watch(props, () => {
  if (props.mode !== mode.value) {
    mode.value = props.mode
  }

  if (props.modelValue !== doc.value) {
    doc.value = props.modelValue
  }
})

function setMode(targetMode: Mode) {
  mode.value = targetMode
  emit('update:mode', mode.value)
}

function getMode() {
  return mode.value
}
setContext('methods', 'setMode', setMode)
setContext('methods', 'getMode', getMode)

function injectCss(css: string) {
  const transformedCss = css.replace(/&(root|header|body|edit|view|edit-container|view-container)([^a-zA-Z0-9_-])/g, (matched) => {
    const selector = matched.slice(1, -1)
    const tail = matched.slice(-1)
    let realSelector = ''
    switch (selector) {
      case 'edit-container':
        realSelector = selectors.editContainer
        break

      case 'view-container':
        realSelector = selectors.viewContainer
        break

      default:
        realSelector = selectors[selector]
        break
    }
    return realSelector + tail
  })
  const styleElement = insertCss(transformedCss)
  onUnmounted(() => {
    styleElement.remove()
  })
  return styleElement
}
injectCss(css)
setContext('methods', 'injectCss', injectCss)

defineExpose({command, insertOrReplace, getContext, setContext })
</script>

<style scoped>
.svme-root {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border: 0;
  overflow: hidden;
}

.svme-extra {
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
  position: absolute;
  left: 0;
  top: 0;
  flex-shrink: 0;
  flex-grow: 0;
}

.svme-root > .svme-header {
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  border: 0;
  overflow: auto;
}
.svme-root > .svme-body {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 30em;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
}

.svme-root > .svme-body > .svme-edit-container {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.svme-root > .svme-body > .svme-edit-container,
.svme-root > .svme-body > .svme-view-container {
  height: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 50%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 100%;
}

.svme-edit, .svme-view {
  overflow: visible;
  box-sizing: border-box;
  scrollbar-width: thin;
  height: auto;
  border: 0;
  flex-basis: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}

.svme-edit {
  padding: 0;
}

.svme-view {
  padding: 1em;
  text-wrap: wrap;
}

.svme-edit > :deep(div) {
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 100%;
}

.svme-mode-both .svme-edit,
.svme-mode-both .svme-view {
  width: 100%;
  border: 0;
}

.cm-editor {
  height: 100%;
}

:deep(.cm-focused) {
  outline: 0 !important;
}

</style>
