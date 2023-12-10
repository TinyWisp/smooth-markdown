<template>
  <div :class="['svme-container', `svme-mode-${mode}`]" v-bind="scopedCss" ref="container">
    <div class="svme-extra">
      <v-node-renderer :vnodes="extraVnodes"></v-node-renderer>
    </div>
    <div class="svme-toolbar">
      <element-wrapper :wrapper-list="toolbarWrapperList">
        <slot name="toolbar"></slot>
      </element-wrapper>
    </div>
    <div class="svme-body">
      <div class="svme-body-edit-wrapper" v-if="mode === 'both' || mode === 'edit'">
        <element-wrapper :wrapper-list="editWrapperList">
          <div
            class="svme-edit"
            ref="edit"
          ></div>
        </element-wrapper>
      </div>
      <div class="svme-body-view-wrapper" v-if="mode === 'both' || mode === 'view'">
        <element-wrapper :wrapper-list="viewWrapperList">
          <div
            class="svme-view"
            ref="view"
          ></div>
        </element-wrapper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import { useCoreEditor } from '../core/useCoreEditor'
import VNodeRenderer from '../utils/VNodeRenderer.vue'
import ElementWrapper from '../utils/ElementWrapper.vue'
import type { Mode, Plugin } from '../core/types'
import { useCss } from '../utils/useCss'

export interface CoreEditorProps {
  modelValue: string
  mode: Mode
  height?: string
  showToolbar?: boolean
  plugins?: Plugin[]
}

const props = withDefaults(defineProps<CoreEditorProps>(), {
  modelValue: '',
  mode: 'both',
  plugins: () => [],
})

const edit: Ref<HTMLElement | null> = ref(null)
const view: Ref<HTMLElement | null> = ref(null)
const container: Ref<HTMLElement | null> = ref(null)
const doc: Ref<string> = ref(props.modelValue)
const mode: Ref<string> = ref(props.mode)

const emit = defineEmits(['update:modelValue', 'update:mode'])

const { 
  getContext,
  setContext,
  command,
  insertOrReplace,
  extraVnodes,
  toolbarWrapperList,
  editWrapperList,
  viewWrapperList,
  css
} = useCoreEditor({
  doc,
  editElem: edit,
  viewElem: view,
  plugins: props.plugins
})

watch(doc, () => {
  emit('update:modelValue', doc.value)
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

const scopedCss = useCss(css)

setContext('methods', 'setMode', setMode)
setContext('methods', 'getMode', getMode)
setContext('props', 'editorProps', props)
setContext('doms', 'container', container)

defineExpose({command, insertOrReplace, getContext, setContext})
</script>

<style scoped>
.svme-container {
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

.svme-container .svme-toolbar {
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  border: 0;
  overflow: auto;
}
.svme-container .svme-body {
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
.svme-container .svme-body .svme-body-edit-wrapper,
.svme-container .svme-body .svme-body-view-wrapper
{
  flex-basis: 50%;
  flex-shrink: 0;
  flex-grow: 1;
  height: 100%;
  overflow: auto;
}


.svme-container .svme-body .svme-body-edit-wrapper {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.svme-edit, .svme-view {
  overflow-y: auto;
  box-sizing: border-box;
  scrollbar-width: thin;
  height: 100%;
  width: 100%;
  height: auto;
  border: 0;
}

.svme-edit {
  padding: 0;
}

.svme-view {
  padding: 1em;
}

.svme-mode-both .svme-edit,
.svme-mode-both .svme-view {
  width: 100%;
  border: 0;
}

.cm-editor {
  height: 100%;
}
</style>

<style>
.svme-view {
  text-wrap: wrap;
  white-space: normal;
}

.svme-view table {
  border-spacing: 0;
  width: auto;
  overflow: auto;
  word-break: normal;
  word-break: keep-all;
  margin: 1.75em 0;
  border: 1px solid teal;
  border-radius: 0.45em;
  border-collapse: separate;
  font-size: 0.85em;
  overflow: hidden;
}

.svme-view table th {
  background-color: #eaf3f3;
  color: teal;
  font-weight: bold;
  text-align: left;
}

.svme-view td, .svme-view th {
  padding: 0.5em 1em;
  border: 0;
  height: 2em;
  min-width: 4em;
}

.svme-view tr:nth-child(2n) {
  background-color: #0000000d;
}

.svme-view tr td:not(:last-child) {
  border-right: 1px solid lightgray;
}

.svme-view tr th:not(:last-child) {
  border-right: 1px solid lightgray;
}

.svme-view tr:hover td {
  background-color: #eaf3f3;
}

.svme-view img {
  max-width: 100%;
}

.svme-view img.emoji {
  display: inline;
  border: 0;
  width: 1em;
  height: 1em;
  padding: 0;
  margin: 0;
}

.svme-view a {
  color: teal;
  font-weight: 600;
  text-decoration: none;
}

.svme-view a:hover {
  text-decoration: underline;
}

.svme-view a > code {
  color: #476582;
  text-decoration: none;
}

.svme-view p {
  line-height: 1.6em;
  letter-spacing: 0.2px;
}

.svme-view strong {
  color: saddlebrown;
  font-weight: bold;
}

.svme-view mark {
  padding: 0.15em 0.5em;
}

.svme-view blockquote {
  margin: 2em 0;
  padding-left: 20px;
  border-left: 4px solid teal;
}

.svme-view ul {
  margin: 0.5em 0;
}

.svme-view h1 {
  margin: 0 0 3rem;
  font-size: 2.4em;
  line-height: 1.4em;
  font-weight: 600;
  padding-bottom: 0.7em;
  border-bottom: 2px solid #ddd;
}

.svme-view h2 {
  font-size: 1.5em;
  font-weight: 600;
  margin: 2.8em 0 0.8em;
  padding-bottom: 0.7em;
  border-bottom: 1px solid #ddd;
}

.svme-view h3 {
  font-size: 1.2em;
  font-weight: 600;
  margin: 3rem 0 1.25rem 0;
}

.svme-view h4 {
  font-size: 1em;
  margin: 1em 0;
}

.svme-view h5 {
  font-size: 0.85em;
  margin: 1em 0;
}

.svme-view h6 {
  font-size: 0.7em;
  margin: 1em 0;
}

.svme-view hr {
  border-left: 0;
  border-right: 0;
}

.svme-view .nothing {
  display: none;
}
</style>