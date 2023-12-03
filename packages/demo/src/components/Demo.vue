<template>
  <div class="demo-container">
    <div class="demo" :style="{height: demoHeight }">
      <component :is="comp" />
    </div>
    <div class="code-container">
      <div class="code-tabs">
        <div
          v-for="(item, idx) of codeTabs"
          :key="item.title"
          :class="['code-tab', {active: activeIdx === idx}]"
          @click="activeIdx = idx"
        >{{ item.title }}</div>
      </div>
      <div class="code-panel" v-html="codePanelHtml" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref, computed} from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import 'highlight.js/styles/github.css'
import { watch } from 'vue'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)

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
    type: Object,
    required: true
  }
})

const demoMap = props.config.demoMap
const demoName = props.code.trim()
const demo = demoMap[demoName]

const comp = defineAsyncComponent(demo.comp)
const codeTabs = demo.codeTabs
const activeIdx = ref(0)
const codePanelHtml = ref('')


watch(activeIdx, async () => {
  const rawCodeModule = await codeTabs[activeIdx.value].code()
  codePanelHtml.value = hljs.highlight(rawCodeModule.default, {language: 'javascript'}).value
}, { immediate: true})

const demoHeight = computed(() => {
  return demo.height ?? '500px'
})

</script>

<style scoped>
.demo-container {
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border: 1px solid lightgray;
  border-radius: 3px;
}
.demo {
  width: 100%;
  height: 500px;
}
.code-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
.code-tabs {
  width: 100%;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #ebebeb;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
}
.code-tab {
  display: block;
  width: auto;
  padding: 0.2em 1em;
  margin: 0 2em 0 1em;
  border-radius: 2px;
  cursor: pointer;
}
.code-tab.active {
  background-color: #c0c0c0;
}
.code-panel {
  background-color: #f9f9f9;
  padding: 1em;
}
</style>