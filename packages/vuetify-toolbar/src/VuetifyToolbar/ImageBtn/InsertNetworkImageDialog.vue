<template>
  <v-dialog
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    persistent
    max-width="600px">
    <v-card>
      <v-toolbar>
        <v-toolbar-title> {{ t('svme.insertNetworkImageDialog.title') }} </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dense elevation="0" @click="hide()">
          <v-icon>{{mdiClose}}</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                :modelValue="url"
                :placeholder="t('svme.insertNetworkImageDialog.urlFieldPlaceHolder')"
                @update:modelValue="$emit('update:url', $event)"
                required/>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="hide()"> {{ t('svme.insertNetworkImageDialog.cancel') }} </v-btn>
        <v-btn color="primary" @click="ok()"> {{ t('svme.insertNetworkImageDialog.ok') }} </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { mdiClose } from '@mdi/js'
import type { Context } from '@smooth-vue-markdown-editor/core'

export default defineComponent({
  setup() {
    const getContext = inject<() => Context>('getContext')
    const context = (getContext!)()
    const { t } = context.methods

    return { t }
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
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
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal) {
        console.log(`---InsertNetworkImageDialog----modelValue:${newVal}---`)
      }
    }
  }
})
</script>