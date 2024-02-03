<template>
  <div class="sm-codeblock">
    <div class="sm-codeblock-lang" v-show="!copied">{{ lang }}</div>
    <div class="sm-codeblock-copy" @click="copy" v-show="!copied"></div>
    <div class="sm-codeblock-copied" v-show="copied">
      {{ t('codeBlock.copied') }}
    </div>
    <element-wrapper :wrapper-list="codeBlockWrapperList">
      <code class="sm-code" ref="codeBlockEl"></code>
    </element-wrapper>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, inject } from 'vue'
import type { Ref, PropType } from 'vue'
import copyToClipboard from 'copy-to-clipboard'
import { EditorView } from "codemirror"
import { EditorState } from '@codemirror/state'
import { languages } from '@codemirror/language-data'
import type { LanguageDescription } from '@codemirror/language'
import type { Extension } from '@codemirror/state'
import type { FnGetContext } from '../../core/types'
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import ElementWrapper from '../../utils/ElementWrapper.vue'

const props = defineProps({
  lang: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  extensions: {
    type: Object as PropType<Extension[]>,
    required: false,
    default: function() {
      return [vscodeDark]
    }
  }
})

const getContext: FnGetContext = inject('getContext')!
const context = getContext()
const { t } = context.lang!
const codeBlockWrapperList = context.pluginManager!.getCodeBlockWrapperList()

const codeBlockEl: Ref<Element | null> = ref(null)
const copied: Ref<boolean> = ref(false)
const stayCopiedTime = 5000

function copy() {
  copyToClipboard(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, stayCopiedTime)
}

onMounted(async () => {
  const extensions: Extension[] = [EditorState.readOnly.of(true), ...props.extensions!]
  const langDes: LanguageDescription | undefined = languages.find((item) => {
    return (item.name.toLowerCase() === props.lang || item.alias.includes(props.lang) || item.extensions.includes(props.lang))
  })

  if (langDes) {
    const langSupport = await langDes.load()
    extensions.push(langSupport)
  }

  new EditorView({
    doc: props.code,
    extensions,
    parent: codeBlockEl.value!
  })
})
</script>

<style scoped>
.sm-codeblock {
  position: relative;
  font-family: 'Droid Sans Mono', 'monospace', monospace;
  padding: 0;
  overflow: hidden;
  line-height: 1.45em;
  background-color: #1e1e1e;
  border-radius: 0.45em;
  color: #e9e9e9;
  width: 100%;
  height: auto;
}

.sm-codeblock .sm-codeblock-lang {
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.4em 0.6em 0 0;
  z-index: 1;
  display: block;
  color: grey;
  font-weight: bolder;
  opacity: 1;
  transition: opacity 0.4s;
  font-size: 0.8em;
}

.sm-codeblock .sm-codeblock-copy {
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.5em 0.5em 0 0;
  z-index: 2;
  width: 3em;
  height: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s;
  cursor: pointer;
  border-radius: 0.3em;
}

.sm-codeblock .sm-codeblock-copy::before {
  display: block;
  content: ' ';
  position: absolute;
  margin: auto;
  width: 1.5em;
  height: 1.5em;
  --svg: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5LDIxSDhWN0gxOU0xOSw1SDhBMiwyIDAgMCwwIDYsN1YyMUEyLDIgMCAwLDAgOCwyM0gxOUEyLDIgMCAwLDAgMjEsMjFWN0EyLDIgMCAwLDAgMTksNU0xNiwxSDRBMiwyIDAgMCwwIDIsM1YxN0g0VjNIMTZWMVoiIC8+PC9zdmc+Cg==);
  -webkit-mask: var(--svg);
  mask: var(--svg);
  background-color: grey;
}

.sm-codeblock:hover .sm-codeblock-lang {
  opacity: 0;
}

.sm-codeblock:hover .sm-codeblock-copy {
  opacity: 1;
  display: flex;
}

.sm-codeblock .sm-codeblock-copy:hover {
  background-color: #292d3e;
}

.sm-codeblock .sm-codeblock-copied {
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.4em 0.6em 0 0;
  z-index: 1;
  display: block;
  color: grey;
  font-weight: bolder;
  opacity: 1;
  transition: opacity 0.4s;
  font-size: 0.8em;
}

:deep(.cm-scroller) {
  width: max-content;
}

:deep(.cm-editor) {
  width: max-content;
}

.sm-code {
  width: max-content;
  display: block;
}

.sm-codeblock :deep(.cm-editor) {
  padding: 10px;
}
</style>