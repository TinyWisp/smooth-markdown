<template>
  <div 
    :class="['sm-root', `sm-mode-${mode}`]"
    :data-uniq-id="rootUniqId"
    :style="rootStyle"
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
    <div class="sm-body" ref="body">
        <div v-show="containerMap.editor" class="sm-editor-container" ref="editorContainer">
          <element-wrapper :wrapper-list="editorWrapperList">
            <div
              :data-uniq-id="editorUniqId"
              class="sm-editor"
              ref="editor"
            ></div>
          </element-wrapper>
        </div>
        <div v-show="containerMap.viewer" class="sm-viewer-container" ref="viewerContainer">
          <element-wrapper :wrapper-list="viewerWrapperList">
            <div
              :data-uniq-id="viewerUniqId"
              class="sm-viewer"
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
              <slot name="toc">
                <simple-toc></simple-toc>
              </slot>
            </div>
          </element-wrapper>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, computed, type Ref, shallowRef, reactive, provide } from 'vue'
import VNodeRenderer from '../utils/VNodeRenderer.vue'
import ElementWrapper from '../utils/ElementWrapper.vue'
import type { Plugin } from '../core/types'
import { uniqId, insertCss } from '../utils/util'
import { useContext } from '../core/useContext'
import SimpleToc from '../core/SimpleToc.vue'
import { initEditor } from './initEditor'
import { initViewer } from './initViewer'
import { PluginManager } from './PluginManager'
import { EventBus } from './EventBus'
import { Lang } from './Lang'

export interface EditorProps {
  modelValue: string
  mode?: string
  locale?: string
  showToolbar?: boolean
  plugins?: Plugin[]
  readonly?: boolean
}

const props = withDefaults(defineProps<EditorProps>(), {
  modelValue: '',
  mode: 'editor|viewer',
  locale: 'en',
  plugins: () => [],
  readonly: false
})

// context
const { getContext, setContext } = useContext()
const context = getContext()
provide('getContext', getContext)
provide('setContext', setContext)

// props
setContext('props', props)

// eventBus
const eventBus = new EventBus()
setContext('eventBus', eventBus)

// pluginManager
const pluginManager = new PluginManager(getContext, setContext)
setContext('pluginManager', pluginManager)

// lang
const lang = new Lang()
const locale = ref(props.locale)
lang.setLocale(locale.value)
setContext('lang', lang)
watch(() => props.locale, () => {
  lang.setLocale(props.locale)
})

// root
const rootUniqId = uniqId()
const rootSelector = `[data-uniq-id=${rootUniqId}]`
const root: Ref<HTMLElement | null> = ref(null)
const rootStyle: {[key: string]: string} = reactive({})
setContext('root', {
  el: root,
  selector: rootSelector,
  style: rootStyle
})

// editor
const editorUniqId = uniqId()
const editor: Ref<HTMLElement | null> = ref(null)
const editorContainer: Ref<HTMLElement | null> = ref(null)
setContext('editor', {
  el: editor,
  selector: `[data-uniq-id=${editorUniqId}]`,
  containerEl: editorContainer,
  containerSelector: `${rootSelector} > .sm-body > .sm-editor-container`,
  scrollEl: ref(null)
})

// viewer
const viewerUniqId = uniqId()
const viewer: Ref<HTMLElement | null> = ref(null)
const viewerContainer: Ref<HTMLElement | null> = ref(null)
setContext('viewer', {
  el: viewer,
  selector: `[data-uniq-id=${viewerUniqId}]`,
  containerEl: viewerContainer,
  containerSelector: `${rootSelector} > .sm-body > .sm-viewer-container`,
  scrollEl: ref(null)
})

// toc
const tocUniqId  = uniqId()
const toc: Ref<HTMLElement | null> = ref(null)
const tocContainer: Ref<HTMLElement | null> = ref(null)
setContext('toc', {
  el: toc,
  selector: `[data-uniq-id=${tocUniqId}]`,
  containerEl: tocContainer,
  containerSelector: `${rootSelector} > .sm-body > .sm-toc-container`,
  scrollEl: ref(null),
  headingList: shallowRef([]),
  activeIndex: ref(0),
  setActive: function(){}
})

// header
const header: Ref<HTMLElement | null> = ref(null)
setContext('header', {
  el: header,
  selector: `${rootSelector} > .sm-header`
})

// body
const body: Ref<HTMLElement | null> = ref(null)
setContext('body', {
  el: body,
  selector: `${rootSelector} > .sm-body`
})

// props.doc 
const doc: Ref<string> = ref(props.modelValue)
setContext('doc', doc)
watch(doc, () => {
  emit('update:modelValue', doc.value)
})
watch(() => props.modelValue, () => {
  if (props.modelValue !== doc.value) {
    doc.value = props.modelValue
  }
})

// props.mode
const mode: Ref<string> = ref(props.mode)
setContext('mode', mode)
const emit = defineEmits(['update:modelValue', 'update:mode'])
watch(mode, () => {
  emit('update:mode', mode.value)
})
watch(() => props.mode, () => {
  if (props.mode !== mode.value) {
    mode.value = props.mode
  }
})

function setMode(targetMode: string) {
  mode.value = targetMode
  emit('update:mode', mode.value)
}

function getMode() {
  return mode.value
}
setContext('setMode', setMode)
setContext('getMode', getMode)


// root.style
watch(() => props.mode, () => {
  const parts = mode.value.split('|')
  for (let i=0; i<parts.length; i++) {
    const part = parts[i]
    rootStyle[`--${part}-container-order`] = i.toString()
    rootStyle[`--${part}-container-border-left-width`] = i > 0 ? '1px' : '0'
  }
}, {immediate: true})

// panelMap
const containerMap = computed(() => {
  const map: {[key: string]: {order: number}}= {}
  const panels = mode.value.split('|')
  for (let i=0; i<panels.length; i++) {
    const panel = panels[i]
    map[panel] = {
      order: i
    }
  }

  return map
})


// init
pluginManager.registerPlugins(props.plugins)
pluginManager.init()

lang.merge(pluginManager.getMessageMap())

initEditor(getContext, setContext)
initViewer(getContext, setContext)

const toolbarWrapperList = pluginManager.getToolbarWrapperList()
const editorWrapperList = pluginManager.getEditorWrapperList()
const viewerWrapperList = pluginManager.getViewerWrapperList()
const tocWrapperList = pluginManager.getTocWrapperList()
const extraVnodes = pluginManager.getExtraVnodes()

const editorScrollEl = pluginManager.getEditorScrollEl() ?? editorContainer
watch(editorScrollEl, () => {
  if (editorScrollEl.value) {
    context.editor.scrollEl!.value = editorScrollEl.value
  }
}, {immediate: true})
const viewerScrollEl = pluginManager.getViewerScrollEl() ?? viewerContainer
watch(viewerScrollEl, () => {
  if (viewerScrollEl.value) {
    context.viewer.scrollEl!.value = viewerScrollEl.value
  }
}, {immediate: true})
const tocScrollEl = pluginManager.getTocScrollEl() ?? tocContainer
watch(tocScrollEl, () => {
  if (tocScrollEl.value) {
    context.toc.scrollEl!.value = tocScrollEl.value
  }
}, {immediate: true})

// injectCss
const selectorMap: {[key: string]: string} = {
  root: context.root.selector!,
  header: context.header.selector!,
  body: context.body.selector!,
  editor: context.editor.selector!,
  viewer: context.viewer.selector!,
  toc: context.toc.selector!,
  'editor-container': context.editor.containerSelector!,
  'viewer-container': context.viewer.containerSelector!,
  'toc-container': context.toc.containerSelector!
}
function injectCss(css: string) {
  const transformedCss = css.replace(/&(root|header|body|editor|viewer|toc|editor-container|viewer-container|toc-container)([^a-zA-Z0-9_-])/g, (matched) => {
    const selector = matched.slice(1, -1)
    const tail = matched.slice(-1)
    let realSelector = selectorMap[selector]
    return realSelector + tail
  })
  const styleElement = insertCss(transformedCss)
  onUnmounted(() => {
    styleElement.remove()
  })
  return styleElement
}
setContext('injectCss', injectCss)
const css = pluginManager.getCss()
injectCss(css)

defineExpose({getContext, setContext })
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
  flex-shrink: 0;
  flex-grow: 0;
  width: auto;
  order: var(--toc-container-order);
  border-left-width: var(--toc-container-border-left-width);
}

.sm-editor, .sm-viewer {
  overflow: visible;
  box-sizing: border-box;
  scrollbar-width: thin;
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  flex-shrink: 1;
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
  min-width: 100%;
}
:deep(.cm-focused) {
  outline: 0 !important;
}

</style>