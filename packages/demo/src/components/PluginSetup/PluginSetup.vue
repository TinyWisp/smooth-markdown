<template>
  <v-container>
    <v-row>
      <v-col cols="4" md="4" v-for="plugin of plugins" :key="plugin.name">
        <v-card>
          <template v-slot:title>
            {{ plugin.name }}
            <v-switch v-model="plugin.enabled" color="primary" style="position: absolute; right: 15px; top: 10px;"></v-switch>
          </template>
          <template v-slot:subtitle>
            {{ plugin.desc }}
          </template>
          <template v-slot:text>
            <span class="code">{{ plugin.code }}</span>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {
  customCodeBlockRenderer,
  langZhCN,
  langEn,
  overlayScrollbars,
  affixToolbar,
  autoHeight,
  math,
  tocSpy,
  syncScrollbars
} from '@smooth-markdown/core/plugins'
import { defineExpose, defineEmits, onMounted, reactive } from 'vue';

const plugins = [
  {
    name: 'langZhCN',
    code: 'langZhCN()',
    val: langZhCN(),
    desc: '中文支持',
    enabled: true
  },
  {
    name: 'langEn',
    code: 'langEn()',
    val: langEn(),
    desc: '英文支持',
    enabled: true
  },
  {
    name: 'overlayScrollbars',
    code: 'overlayScrollbars()',
    val: overlayScrollbars(),
    desc: '滚动条',
    enabled: true
  },
  {
    name: 'affixToolbar',
    code: 'affixToolbar()',
    val: affixToolbar(),
    desc: '固定工具栏',
    enabled: true
  },
  {
    name: 'autoHeight',
    code: 'autoHeight()',
    val: autoHeight(),
    desc: '自动高度',
    enabled: true
  },
  {
    name: 'math',
    code: 'math()',
    val: math(),
    desc: '公式',
    enabled: true
  },
  /*
  {
    name: 'tocSpy',
    code: 'tocSpy()',
    val: tocSpy(),
    desc: 'table of contents',
    enabled: true
  },
  */
  {
    name: 'syncScrollbars',
    code: 'syncScrollbars()',
    val: syncScrollbars(),
    desc: 'sync the scrollbars',
    enabled: true
  }
]

function getPlugins() {
  const items = []
  plugins.forEach((plugin) => {
    if (plugin.enabled) {
      items.push(plugin.val)
    }
  })

  return items
}

const emit = defineEmits(['changed'])

onMounted(() => {
 emit('changed')
})

defineExpose({ getPlugins })
</script>

<style scoped>
.code {
  display: inline-block;
  background-color: lightgray;
  line-height: 1.5;
  color: steelblue;
  border-radius: 2px;
  padding: 0 10px;
}
</style>