<template>
  <el-dialog
    v-model="isVisible"
    :title="t('insertLinkDialog.title')"
    max-width="600px">
    <el-form
      :model="form"
      :rules="rules"
      label-width="auto"
      ref="form"
    >
      <el-form-item :label="t('insertLinkDialog.urlField')" prop="url">
        <el-input v-model="form.url" :placeholder="t('insertLinkDialog.urlFieldPlaceHolder')"></el-input>
      </el-form-item>
      <el-form-item :label="t('insertLinkDialog.titleField')" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-space>
        <el-button type="info" @click="hide()"> {{ t('insertLinkDialog.cancel') }} </el-button>
        <el-button type="primary" @click="ok()"> {{ t('insertLinkDialog.ok') }} </el-button>
      </el-space>
    </template>
  </el-dialog>
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
  data() {
    return {
      isVisible: false,
      form: {
        url: '',
        title: ''
      },
      rules: {
        url: [
          {
            required: true,
            message: this.t('insertLinkDialog.urlFieldIsEmptyErr'),
            trigger: 'blur'
          },
          {
            pattern: /^(http|https):\/\/.+$/,
            message: this.t('insertLinkDialog.urlFieldIsInvalidErr'),
            trigger: 'change'
          }
        ]
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
    ok () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('ok', this.form.url, this.form.title)
          this.hide()
        }
      })
    }
  }
})
</script>