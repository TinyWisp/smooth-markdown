<template>
  <teleport
    v-for="codeBlock of codeBlocks"
    :key="codeBlock.id"
    :to="codeBlock.target"
  >
    <component
      :is="codeBlock.component"
      :lang="codeBlock.lang"
      :code="codeBlock.code"
      :line-begin="codeBlock.lineBegin"
      :line-end="codeBlock.lineEnd"
      :props="codeBlock.componentProps"
    />
  </teleport>
</template>

<script lang="ts" setup>
import { ref, computed, type Ref, watch } from 'vue'
import type { CodeBlock, CodeBlockMap, LangComponentMap } from './types'
import DefaultRenderer from './DefaultRenderer.vue'
import { tsNumberKeyword } from '@babel/types';

interface CodeBlockRendererProps {
  codeBlockMap: Ref<CodeBlockMap>
  langComponentMap: LangComponentMap
}

const props = withDefaults(defineProps<CodeBlockRendererProps>(), {
  codeBlockMap: () => ref({}),
  langComponentMap: () => ({} as LangComponentMap)
})

const { codeBlockMap, langComponentMap } = props

const codeBlocks = computed(() => {
  const codeBlocks: CodeBlock[] = []
  
  const pushedMap: {[key: number]: number} = {}
  for (const key of (Object.keys(codeBlockMap.value))) {
    const codeBlock = codeBlockMap.value[Number(key)]
    if (pushedMap[codeBlock.lineBegin]) {
      continue
    }
    const clonedCodeBlock = Object.assign({}, codeBlock)

    const { lang } = clonedCodeBlock
    const target = document.getElementById(clonedCodeBlock.id)
    if (!target) {
      continue
    }
    clonedCodeBlock.target = target
    if (langComponentMap[lang]) {
      clonedCodeBlock.component = langComponentMap[lang][0]
      clonedCodeBlock.componentProps = langComponentMap[lang][1] || {}
    } else if (langComponentMap.default) {
      clonedCodeBlock.component = langComponentMap.default[0]
      clonedCodeBlock.componentProps = langComponentMap.default[1] || {}
    } else {
      clonedCodeBlock.component = DefaultRenderer
      clonedCodeBlock.componentProps = {}
    }

    codeBlocks.push(clonedCodeBlock)
    pushedMap[codeBlock.lineBegin] = 1
  }

  return codeBlocks
})

</script>

