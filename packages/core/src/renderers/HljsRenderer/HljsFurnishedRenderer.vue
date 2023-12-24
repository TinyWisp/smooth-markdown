<template>
  <div class="svme-codeblock" ref="container">
    <div class="svme-codeblock-lang" v-show="!copied">{{ lang }}</div>
    <div class="svme-codeblock-copy" @click="copy" v-show="!copied"></div>
    <div class="svme-codeblock-copied" v-show="copied">
      {{ t('svme.codeBlock.copied') }}
    </div>
    <div class="hljs-wrapper" ref="hljsWrapper">
      <hljs-renderer
        :lang="lang"
        :code="code"
        :fnGetLangDef="fnGetLangDef"
      ></hljs-renderer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HljsRenderer from './HljsRenderer.vue'
import { inject, onMounted, ref, reactive, watch } from 'vue'
import type { Ref } from 'vue'
import type { FnGetContext } from '../../core/types'
import copyToClipboard from 'copy-to-clipboard'
import { useOverlayScrollbars } from "overlayscrollbars-vue"
import type { ScrollbarsAutoHideBehavior } from "overlayscrollbars"
import { ClickScrollPlugin, OverlayScrollbars, ScrollbarsHidingPlugin } from "overlayscrollbars"
import 'overlayscrollbars/overlayscrollbars.css'

const props = defineProps({
  lang: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  fnGetLangDef: {
    type: Function,
    required: true
  }
})

const getContext: FnGetContext = inject('getContext')!
const context = getContext()
const { t } = context.methods

const copied: Ref<boolean> = ref(false)
const stayCopiedTime = 5000

function copy() {
  copyToClipboard(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, stayCopiedTime)
}

OverlayScrollbars.plugin(ClickScrollPlugin)
OverlayScrollbars.plugin(ScrollbarsHidingPlugin)
const container = ref(null)
const hljsWrapper = ref(null)
const params = {
  options: {
    scrollbars: {
      clickScroll: true,
      autoHide: 'leave' as ScrollbarsAutoHideBehavior
    }
  },
  events: {},
  defer: true
}
const [initialize] = useOverlayScrollbars(params);
onMounted(() => {
  initialize({
    target: container.value!,
    elements: {
      viewport: hljsWrapper.value!
    }
  })
})

</script>

<style scoped>
.svme-codeblock {
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

.svme-codeblock .svme-codeblock-lang {
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

.svme-codeblock .svme-codeblock-copy {
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

.svme-codeblock .svme-codeblock-copy::before {
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

.svme-codeblock:hover .svme-codeblock-lang {
  opacity: 0;
}

.svme-codeblock:hover .svme-codeblock-copy {
  opacity: 1;
  display: flex;
}

.svme-codeblock .svme-codeblock-copy:hover {
  background-color: #292d3e;
}

.svme-codeblock .svme-codeblock-copied {
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
