<template>
  <div class="sm-codeblock" ref="container">
    <div class="sm-codeblock-lang" v-show="!copied">{{ lang }}</div>
    <div class="sm-codeblock-copy" @click="copy" v-show="!copied"></div>
    <div class="sm-codeblock-copied" v-show="copied">
      {{ t('codeBlock.copied') }}
    </div>
    <div class="hljs-wrapper" ref="hljsWrapper">
      <element-wrapper :wrapper-list="codeBlockWrapperList">
        <basic-hljs-renderer v-bind="props" />
      </element-wrapper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BasicHljsRenderer from './BasicHljsRenderer.vue'
import { inject, ref } from 'vue'
import type { Ref } from 'vue'
import type { FnGetContext, RendererProps } from '../../core/types'
import copyToClipboard from 'copy-to-clipboard'
import ElementWrapper from '../../utils/ElementWrapper.vue'

interface HljsRendererProps extends RendererProps {
  fnGetLangDef: Function
}

const props = defineProps<HljsRendererProps>()

const getContext: FnGetContext = inject('getContext')!
const context = getContext()
const { t } = context.lang!
const codeBlockWrapperList = context.pluginManager!.getCodeBlockWrapperList()

const copied: Ref<boolean> = ref(false)
const stayCopiedTime = 5000

function copy() {
  copyToClipboard(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, stayCopiedTime)
}

const container = ref(null)
const hljsWrapper = ref(null)
</script>

<style scoped>
.sm-codeblock {
  position: relative;
  font-family: 'Droid Sans Mono', 'monospace', monospace;
  padding: 0;
  overflow: auto;
  line-height: 1.45em;
  border-radius: 0.45em;
  position: relative;
  margin-left: auto;
  margin-right: auto;
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

:deep(.ps) {
  height: 300px;
}

:deep(.code-block) {
  width: fit-content;
  height: auto;
  overflow: visible !important;
}
</style>
