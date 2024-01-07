<template>
  <div 
    :class="['sm-root', `sm-mode-${mode}`]"
    :data-uniq-id="rootUniqId"
    ref="root"
  >
    <div class="sm-extra">
      <v-node-renderer :vnodes="extraVnodes"></v-node-renderer>
    </div>
    <div class="sm-header" ref="header">
      <element-wrapper :wrapper-list="toolbarWrapperList">
        <slot name="toolbar"></slot>
      </element-wrapper>
    </div>
    <div class="sm-body" :style="bodyStyle" ref="body">
        <div v-if="containerMap.editor" class="sm-editor-container" ref="editorContainer">
          <element-wrapper :wrapper-list="editorWrapperList">
            <div
              :data-uniq-id="editorUniqId"
              class="sm-editor"
              ref="editor"
            ></div>
          </element-wrapper>
        </div>
        <div v-if="containerMap.viewer" class="sm-viewer-container" ref="viewerContainer">
          <element-wrapper :wrapper-list="viewerWrapperList">
            <div
              :data-uniq-id="viewerUniqId"
              class="sm-view"
              ref="viewer"
            ></div>
          </element-wrapper>
        </div>
        <div v-if="containerMap.toc" class="sm-toc-container" ref="tocContainer">
          <element-wrapper :wrapper-list="tocWrapperList">
            <div
              :data-uniq-id="tocUniqId"
              class="sm-toc"
              ref="toc"
            >
              <simple-toc
                :toc-spy="tocSpy"
              ></simple-toc>
            </div>
          </element-wrapper>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, computed, type Ref } from 'vue'
import { useCoreEditor } from '../core/useCoreEditor'
import VNodeRenderer from '../utils/VNodeRenderer.vue'
import ElementWrapper from '../utils/ElementWrapper.vue'
import type { Plugin } from '../core/types'
import insertCss from 'insert-css'
import { uniqId } from '../utils/util'
import { useContext } from '../core/useContext'
import SimpleToc from '../core/SimpleToc.vue'

export interface EditorProps {
  modelValue: string
  mode: string
  showToolbar?: boolean
  plugins?: Plugin[]
}

const props = withDefaults(defineProps<EditorProps>(), {
  modelValue: '',
  mode: 'editor|viewer',
  plugins: () => [],
})

const { getContext, setContext } = useContext()

// selectors
const rootUniqId = uniqId()
const editorUniqId = uniqId()
const viewerUniqId = uniqId()
const tocUniqId  = uniqId()
const rootSelector = `[data-uniq-id=${rootUniqId}]`
const selectors: {[key:string]: string} = {
  root: rootSelector,
  editor: `[data-uniq-id=${editorUniqId}]`,
  viewer: `[data-uniq-id=${viewerUniqId}]`,
  toc: `[data-uniq-id=${tocUniqId}]`,
  header: `${rootSelector} > .sm-header`,
  body: `${rootSelector} > .sm-body`,
  editorContainer: `${rootSelector} > .sm-body > .sm-editor-container`,
  viewerContainer: `${rootSelector} > .sm-body > .sm-viewer-container`,
  tocContainer: `${rootSelector} > .sm-body > .sm-toc-container`
}
Object.keys(selectors).forEach((key) => {
  setContext('selectors', key, selectors[key])
})

// doms
const editor: Ref<HTMLElement | null> = ref(null)
const viewer: Ref<HTMLElement | null> = ref(null)
const toc: Ref<HTMLElement | null> = ref(null)
const root: Ref<HTMLElement | null> = ref(null)
const header: Ref<HTMLElement | null> = ref(null)
const body: Ref<HTMLElement | null> = ref(null)
const editorContainer: Ref<HTMLElement | null> = ref(null)
const viewerContainer: Ref<HTMLElement | null> = ref(null)
const tocContainer: Ref<HTMLElement | null> = ref(null)
setContext('doms', 'root', root)
setContext('doms', 'header', header)
setContext('doms', 'body', body)
setContext('doms', 'editor', editor)
setContext('doms', 'viewer', viewer)
setContext('doms', 'toc', toc)
setContext('doms', 'editorContainer', editorContainer)
setContext('doms', 'viewerContainer', viewerContainer)
setContext('doms', 'tocContainer', tocContainer)

// data
const doc: Ref<string> = ref(props.modelValue)
const mode: Ref<string> = ref(props.mode)
setContext('data', 'smProps', props)
setContext('data', 'doc', doc)
setContext('data', 'mode', mode)

const emit = defineEmits(['update:modelValue', 'update:mode'])

const { 
  command,
  insertOrReplace,
  css,
  extraVnodes,
  toolbarWrapperList,
  editorWrapperList,
  viewerWrapperList,
  tocWrapperList,
  tocSpy
} = useCoreEditor({
  doc,
  editorEl: editor,
  viewerEl: viewer,
  tocEl: toc,
  plugins: props.plugins,
  getContext,
  setContext,
  editorScrollEl: editorContainer,
  viewerScrollEl: viewerContainer,
  tocScrollEl: tocContainer
})


watch(doc, () => {
  emit('update:modelValue', doc.value)
})


const bodyStyle = computed(() => {
  const style: {[key: string]: string} = {}

  const containers = mode.value.split('|')
  for (let i=0; i<containers.length; i++) {
    const container = containers[i]
    style[`--${container}-container-order`] = i.toString()
    style[`--${container}-container-border-left-width`] = i > 0 ? '1px' : '0'
  }

  return style
})
 
const containerMap = computed(() => {
  const map: {[key: string]: {order: number}}= {}

  const containers = mode.value.split('|')
  for (let i=0; i<containers.length; i++) {
    const container = containers[i]
    map[container] = {
      order: i
    }
  }

  return map
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

function setMode(targetMode: string) {
  mode.value = targetMode
  emit('update:mode', mode.value)
}

function getMode() {
  return mode.value
}
setContext('methods', 'setMode', setMode)
setContext('methods', 'getMode', getMode)

function injectCss(css: string) {
  const transformedCss = css.replace(/&(root|header|body|editor|viewer|toc|editor-container|viewer-container|toc-container)([^a-zA-Z0-9_-])/g, (matched) => {
    const selector = matched.slice(1, -1)
    const tail = matched.slice(-1)
    let realSelector = selector.replace('-container', 'Container')
    return selectors[realSelector] + tail
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
.sm-root {
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

.sm-extra {
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

.sm-root > .sm-header {
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  border: 0;
  overflow: auto;
}
.sm-root > .sm-body {
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

.sm-root > .sm-body > .sm-editor-container,
.sm-root > .sm-body > .sm-viewer-container,
.sm-root > .sm-body > .sm-toc-container {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 100%;
  border-left-style: solid;
  border-left-color: rgba(0, 0, 0, 0.12);
}

.sm-root > .sm-body > .sm-editor-container {
  flex-shrink: 5;
  flex-grow: 5;
  flex-basis: 50%;
  order: var(--editor-container-order);
  border-left-width: var(--editor-container-border-left-width);
}
.sm-root > .sm-body > .sm-viewer-container {
  flex-shrink: 5;
  flex-grow: 5;
  flex-basis: 50%;
  order: var(--viewer-container-order);
  border-left-width: var(--viewer-container-border-left-width);
}

.sm-root > .sm-body > .sm-toc-container {
  flex-shrink: 3;
  flex-grow: 3;
  flex-basis: 30%;
  order: var(--toc-container-order);
  border-left-width: var(--toc-container-border-left-width);
}

.sm-editor, .sm-viewer {
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
  width: 100%;
}

.sm-editor {
  padding: 0;
}

.sm-viewer {
  padding: 1em;
  text-wrap: wrap;
}

.sm-editor > :deep(div) {
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 100%;
}
.cm-editor {
  height: 100%;
}

:deep(.cm-focused) {
  outline: 0 !important;
}

</style>
