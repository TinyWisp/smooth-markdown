<template>
  <div :class="['home', 'pc']">

    <div class="aside" v-show="showAside">
      <div class="menu-tree-wrapper">
        <vue-tree
          ref="tree" 
          class="menu-tree"
          treeId="menuTree"
          :tree="menuTree"
          :defaultAttrs="{
            style: {
              titleMaxWidth: '-5%',
              titleOverflow: 'ellipsis'
            }
          }"
          @select="showDemo">
        </vue-tree>
      </div>
    </div>

    <div class="main">
        <router-view/>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import VueTree from '@tinywisp/vue-tree'
import { ref } from 'vue'
import type { Ref } from 'vue'

const menuTree = [
  {
    title: 'vuetify',
    hasChild: true,
    children: [
      {
        title: 'basic',
        path: '/vuetify/basic'
      },
      {
        title: 'custom toolbar items',
        path: '/vuetify/custom-toolbar'
      }
    ]
  },
  {
    title: 'plugins',
    hasChild: true,
    children: [
      {
        title: 'affix toolbar',
        path: '/plugins/affix-toolbar'
      },
      {
        title: 'custom code block renderer',
        path: '/plugins/custom-code-block-renderer'
      }
    ]
  }
]
const router = useRouter()
const showAside: Ref<boolean> = ref(true)

function toggleAside() {
  showAside.value = !showAside.value
}

function showDemo(menuItem: any) {
  if (!menuItem.hasChild && menuItem.path) {
    router.push(menuItem.path)
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.home.pc {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
}
.home.pc .aside {
  flex-basis: 250px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid black;
  flex-grow: 0;
  flex-shrink: 0;
  display: block;
}
.home.pc .main {
  flex-shrink: 1;
  flex-grow: 1;
}
</style>