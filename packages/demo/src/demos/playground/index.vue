<template>
  <v-container>
    <v-row>
      <v-col cols="4" md="4">
        readonly <v-switch v-model="readonly"></v-switch>
      </v-col>
      <v-col cols="4" md="4">
        mode <v-select v-model="mode" :items="modes" density="compact" label="mode"></v-select>
      </v-col>
      <v-col cols="4" md="4">
        lang <v-select v-model="lang" :items="langs" density="compact" label="lang"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">Plugins:</v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <button @click="forceUpdate += 1">hello world</button>
        <plugin-setup ref="pluginSetup" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <div style="border: 1px solid lightgray; border-radius: 3px;">
          <smooth-markdown
            v-model="doc"
            :plugins="plugins"
            :mode="mode"
            :readonly="readonly"
            :lang="lang"
            :key="forceUpdate"
          >
            <template v-slot:toolbar="tprops">
              <vuetify-toolbar color="white" v-bind="tprops"></vuetify-toolbar>
              <v-divider></v-divider>
            </template>
          </smooth-markdown>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown } from '@smooth-markdown/core'
import PluginSetup from '../../components/PluginSetup/PluginSetup.vue'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'
import cnt from './cnt.md?raw'

const modes = ['editor|viewer|toc', 'editor|viewer', 'toc|viewer', 'viewer|toc', 'viewer', 'editor']
const langs = ['zh_CN', 'en']
const pluginSetup = ref(null)

const doc = ref(cnt)
const mode = ref('editor|viewer|toc')
const readonly = ref(false)
const lang = ref('zh_CN')
let plugins = []
const forceUpdate = ref(1)

/*
function handlePluginsChanged() {
  console.log('--handlePluginsChanged---')
  plugins = pluginSetup.value.getPlugins()
  console.log(plugins)
  forceUpdate.value += 1
}
*/
</script>

<style scoped>
</style>