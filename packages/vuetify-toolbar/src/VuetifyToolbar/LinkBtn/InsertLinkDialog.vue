<template>
  <v-dialog
    :modelValue="modelValue"
    max-width="600px"
    persistent>
    <v-card>
      <v-toolbar>
        <v-toolbar-title>{{ t('svme.insertLinkDialog.title') }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dense elevation="0" @click="hide()">
          <v-icon :icon="mdiClose"></v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                :value="title"
                @update:modelValue="$emit('update:title', $event)"
                :placeholder="t('svme.insertLinkDialog.titleFieldPlaceHolder')"
                required>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                :value="url"
                @update:modelValue="$emit('update:url', $event)"
                :placeholder="t('svme.insertLinkDialog.urlFieldPlaceHolder')"
                required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="cancel()">{{ t('svme.insertLinkDialog.cancel') }}</v-btn>
        <v-btn color="primary" @click="ok()">{{ t('svme.insertLinkDialog.ok') }}</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog> 
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { mdiClose } from '@mdi/js'
import type { CoreContext } from '@smooth-vue-markdown-editor/core'

export default defineComponent({
  setup() {
    const getCoreContext = inject<() => CoreContext>('getCoreContext')
    const context = (getCoreContext!)()
    const { t } = context.methods

    return { t }
  },

  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    url: {
      type: String,
      required: false,
      default: '',
    }
  },
  data: function () {
    return {
      mdiClose,
    }
  },
  methods: {
    hide () {
      this.$emit('update:modelValue', false)
    },
    cancel () {
      this.hide()
    },
    ok () {
      this.$emit('ok')
    },
  }
})
</script>
