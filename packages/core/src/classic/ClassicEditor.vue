<template>
  <classic-editor-layout
    :class="[`svme-mode-${mode}`, 'svme-container']"
    :show-toolbar="true"
    :show-edit="mode === 'both' || mode === 'edit'"
    :show-view="mode === 'both' || mode === 'view'"
  >
    <template v-slot:classic-editor-extra>
      <v-node-renderer :vnodes="extraVnodes"></v-node-renderer>
    </template>
    <template v-slot:classic-editor-toolbar>
      <element-wrapper :wrapper-list="toolbarWrapperList">
        <slot name="toolbar"></slot>
      </element-wrapper>
    </template>
    <template v-slot:classic-editor-body-edit>
      <div
        class="svme-edit"
        ref="edit"
        v-if="mode === 'edit' || mode === 'both'"
      ></div>
    </template>
    <template v-slot:classic-editor-body-view>
      <div
        class="svme-view"
        ref="view"
        v-if="mode === 'view' || mode === 'both'"
      ></div>
    </template>
  </classic-editor-layout>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import ClassicEditorLayout from './ClassicEditorLayout.vue'
import { useCoreEditor } from '../core/useCoreEditor'
import VNodeRenderer from '../utils/VNodeRenderer.vue'
import ElementWrapper from '../utils/ElementWrapper.vue'
import type { Mode, Plugin } from '../core/types'

export interface CoreEditorProps {
  modelValue: string
  mode: Mode
  height?: string
  showToolbar?: boolean
  toolbarItems?: string[]
  plugins?: Plugin[]
}

const props = withDefaults(defineProps<CoreEditorProps>(), {
  modelValue: '',
  mode: 'both',
  height: '30em',
  showToolbar: true,
  toolbarItems: () => ['undo', 'redo', 'divider', 
    'bold', 'italic', 'strike', 'underline', 'subscript', 'superscript', 'mark', 'heading1', 'heading2', 'heading3', 'divider',
    'bulletedList', 'numberedList', 'quote', 'codeBlock', 'link', 'image', 'horizontalRule', 'table',
    'spacer',
    'preview'
  ],
  plugins: () => [],
})

const edit: Ref<HTMLElement | null> = ref(null)
const view: Ref<HTMLElement | null> = ref(null)
const doc: Ref<string> = ref(props.modelValue)
const mode: Ref<string> = ref(props.mode)

const emit = defineEmits(['update:modelValue', 'update:mode'])

const { getContext, setContext, command, insertOrReplace, extraVnodes, toolbarWrapperList } = useCoreEditor({
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

setContext('methods', 'setMode', setMode)
setContext('methods', 'getMode', getMode)
setContext('props', 'editorProps', props)

defineExpose({command, insertOrReplace, getContext, setContext})
</script>

<style>
.svme-edit, .svme-view {
  overflow-y: auto;
  box-sizing: border-box;
  scrollbar-width: thin;
  height: 100%;
}

.svme-edit {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  padding: 0;
}

.svme-view {
  padding: 1em;
}

.svme-mode-both .svme-edit {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  flex-basis: 50%;
  width: 50%;
}

.svme-mode-both .svme-view {
  flex-basis: 50%;
  width: 50%;
}
.cm-editor {
  height: 100%;
}

.svme-view {
  padding: 1em;
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
</style>./Plugin