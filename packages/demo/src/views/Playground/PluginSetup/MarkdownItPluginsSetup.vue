<template>
  <pre>
import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import ins from 'markdown-it-ins'
import br  from 'markdown-it-br'
import mark from 'markdown-it-mark'
import deflist from 'markdown-it-deflist'
import taskLists from 'markdown-it-task-lists'
import footnote from 'markdown-it-footnote'
import mialert from 'markdown-it-alert'

...
markdownItPlugins([</pre> 
    <div v-for="plugin of plugins" :key="plugin.name" class="item">
      [{{ plugin.name }}],
      <input type="checkbox" v-model="plugin.enabled" class="checkbox">
    </div>
  <pre>
  ])
...
  </pre>
</template>

<script lang="ts" setup>
import { watch, ref, reactive } from 'vue'
import { markdownItPlugins } from '@smooth-markdown/core/plugins'
import type { MditLoadPlugin } from '@smooth-markdown/core'
import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import ins from 'markdown-it-ins'
import br  from 'markdown-it-br'
import mark from 'markdown-it-mark'
import deflist from 'markdown-it-deflist'
import taskLists from 'markdown-it-task-lists'
import footnote from 'markdown-it-footnote'
import mialert from 'markdown-it-alert'

defineProps({
  modelValue: {
    type: Function,
    required: true
  }
})

const plugins = reactive([
  {
    name: 'sup',
    plugin: [sup],
    enabled: true
  },
  {
    name: 'sub',
    plugin: [sub],
    enabled: true
  },
  {
    name: 'ins',
    plugin: [ins],
    enabled: true
  },
  {
    name: 'br',
    plugin: [br],
    enabled: true
  },
  {
    name: 'mark',
    plugin: [mark],
    enabled: true
  },
  {
    name: 'deflist',
    plugin: [deflist],
    enabled: true
  },
  {
    name: 'taskLists',
    plugin: [taskLists],
    enabled: true
  },
  {
    name: 'footnote',
    plugin: [footnote],
    enabled: true
  },
  {
    name: 'mialert',
    plugin: [mialert],
    enabled: true
  }
])

const emit = defineEmits(['update:modelValue'])
watch(plugins, () => {
  const mdplugins: MditLoadPlugin[] = []
  plugins.forEach((item) => {
    if (item.enabled) {
      mdplugins.push(item.plugin)
    }
  })

  emit('update:modelValue', () => {
    return markdownItPlugins(mdplugins)
  })
}, { deep: true })

</script>

<style scoped>
.item {
  text-indent: 2em;
}
.item .checkbox {
  display: inline-block;
}
</style>