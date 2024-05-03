<template>
  <v-dialog
    v-model="isVisible"
    persistent
    max-width="600px">
    <v-card>
      <v-toolbar>
        <v-toolbar-title> {{ t('insertNetworkImageDialog.title') }} </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dense elevation="0" @click="hide()">
          <v-icon icon="mdi-close"></v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form" validate-on="blur">
          <v-text-field
            v-model="form.url"
            :label="t('insertNetworkImageDialog.urlField')"
            :placeholder="t('insertNetworkImageDialog.urlFieldPlaceHolder')"
            :rules="[rules.urlRequired, rules.urlValid]"
            required
          />
          <v-text-field
            v-model="form.title"
            :label="t('insertNetworkImageDialog.titleField')"
            :placeholder="t('insertNetworkImageDialog.titleFieldPlaceHolder')"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="hide()"> {{ t('insertNetworkImageDialog.cancel') }} </v-btn>
        <v-btn color="primary" @click="ok()"> {{ t('insertNetworkImageDialog.ok') }} </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import type { Context } from '@smooth-markdown/core'

export default defineComponent({
  setup() {
    const getContext = inject<() => Context>('getContext')
    const context = (getContext!)()
    const { t } = context.lang

    return { t }
  },
  data: function () {
    return {
      isVisible: false,
      form: {
        url: '',
        title: ''
      },
      rules: {
        urlRequired: (value: string) => !!value || this.t('insertNetworkImageDialog.urlFieldIsEmptyErr'),
        urlValid: (value: string) => {
          const pattern = /^(http|https):\/\//
          return pattern.test(value) || this.t('insertNetworkImageDialog.urlFieldIsInvalidErr')
        }
      }
    }
  },
  methods: {
    hide() {
      this.isVisible = false
    },
    open() {
      this.form.url = ''
      this.form.title = ''
      this.isVisible = true
    },
    async ok () {
      const { valid } = await this.$refs.form.validate()
      if (valid) {
        this.$emit('ok', this.form.url, this.form.title)
        this.hide()
      }
    },
  }
})
</script>