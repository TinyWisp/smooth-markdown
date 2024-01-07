<template>
  <div class="sm-codeblock">
    <div class="sm-codeblock-lang" v-show="!copied">{{ lang }}</div>
    <div class="sm-codeblock-copy" @click="copy" v-show="!copied"></div>
    <div class="sm-codeblock-copied" v-show="copied">
      {{ config.tip?.copied }}
    </div>
    <code ref="codeBlockEl" :class="'hljs language-' + lang">{{ code }}</code>
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type { Ref, PropType } from 'vue'
import copyToClipboard from 'copy-to-clipboard'
import hljs from 'highlight.js/lib/common'
import { getLangDef } from './hljs'
import 'highlight.js/styles/vs2015.css'

export interface HighlightCodeBlockWithHljsConfig {
  tip?: {
    copied: string
  }
}

const props = defineProps({
  lang: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  config: {
    type: Object as PropType<HighlightCodeBlockWithHljsConfig>,
    required: false,
    default: () => {
      return {
        tip: {
          copied: 'Copied'
        }
      }
    }
  }
})

const codeBlockEl: Ref<HTMLElement | null> = ref(null)
const copied: Ref<boolean> = ref(false)
const stayCopiedTime = 5000

function copy() {
  copyToClipboard(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, stayCopiedTime)
}

onMounted(() => {
  const langDef = getLangDef(props.lang)
  if (langDef) {
    (async() => {
      if (!hljs.getLanguage(props.lang)) {
        const langDefModule = await langDef()
        hljs.registerLanguage(props.lang, langDefModule.default)
      }
      codeBlockEl.value && hljs.highlightElement(codeBlockEl.value)
    })()
  }
})
</script>

<style scoped>
.sm-codeblock {
  position: relative;
  font-family: 'Droid Sans Mono', 'monospace', monospace;
  padding: 1em 1.5em;
  overflow: auto;
  line-height: 1.45em;
  background-color: #1e1e1e;
  border-radius: 0.45em;
  color: #e9e9e9;
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

</style>