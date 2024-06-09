<template>
  <div class="container">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">Props:</v-col>
      </v-row>
      <v-row>
        <v-col cols="4" md="4">
          readonly <v-switch v-model="readonly" color="primary"></v-switch>
        </v-col>
        <v-col cols="4" md="4">
          mode <v-select v-model="mode" :items="modes" density="compact" label="mode"></v-select>
        </v-col>
        <v-col cols="4" md="4">
          locale <v-select v-model="locale" :items="langs" density="compact" label="locale"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">Plugins:</v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <plugin-setup ref="pluginSetupComp" @changed="handlePluginsChanged" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <div style="border: 1px solid lightgray; border-radius: 3px; height: 800px;">
            <smooth-markdown
              v-model="doc"
              :plugins="plugins"
              :mode="mode"
              :readonly="readonly"
              :locale="locale"
              :key="forceUpdate"
            >
              <template v-slot:toolbar>
                <vuetify-toolbar color="white"></vuetify-toolbar>
                <v-divider></v-divider>
              </template>
              <template v-slot:toc>
                <simple-toc></simple-toc>
              </template>
            </smooth-markdown>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SmoothMarkdown, SimpleToc } from '@smooth-markdown/core'
import PluginSetup from './PluginSetup/PluginSetup.vue'
import VuetifyToolbar from '@smooth-markdown/vuetify-toolbar'
import cnt from '@/utils/sample'

const modes = ['editor|viewer|toc', 'editor|viewer', 'toc|viewer', 'viewer|toc', 'viewer', 'editor']
const langs = ['zh_CN', 'en']
const pluginSetupComp = ref(null)

const doc = ref(cnt)
const mode = ref('editor|viewer|toc')
const readonly = ref(false)
const locale = ref('zh_CN')
let plugins = []
const forceUpdate = ref(1)

function handlePluginsChanged() {
  console.log('--handlePluginsChanged---')
  plugins = pluginSetupComp.value.getPlugins()
  console.log(plugins)
  forceUpdate.value += 1
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
</style>