<template>
  <div 
    :class="[
      'classic-editor', 
      {'full-screen': isFullScreen}, 
      {'scrollbar': enableScrollbar}, 
      {'affix-toolbar': enableAffixToolbar}
    ]"
    :style="{
      '--toolbarWidth': toolbarWidth,
      '--toolbarHeight': toolbarHeight,
      '--editorHeight': height,
      '--bodyHeight': bodyHeight,
    }"
    >
    <div class="classic-editor-toolbar" ref="toolbar">
      <affix
        :relative-element-selector="`#${containerId}`"
        :scroll-affix="false"
        :offset="{
          top: 1,
          bottom: 100,
        }"
        v-if="enableAffixToolbar">
        <div class="cover"></div>
        <slot name="classic-editor-toolbar"></slot>
      </affix>
      <template v-else>
        <slot name="classic-editor-toolbar"></slot>
      </template>
    </div>
    <div class="classic-editor-body">
      <slot name="classic-editor-body"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Affix } from 'vue-affix'

export default defineComponent({
  components: {
    Affix,
  },
  props: {
    isFullScreen: {
      type: Boolean,
      required: true,
    },
    enableScrollbar: {
      type: Boolean,
      default: true,
    },
    enableAffixToolbar: {
      type: Boolean,
      default: false,
    },
    containerId: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: false,
      default: 'auto',
    }
  },
  watch: {
    enableAffixToolbar () {
      this.calcToolbarSize()
    }
  },
  data: function () {
    return {
      toolbarWidth: '100%',
      toolbarHeight: 'auto',
    }
  },
  computed: {
    bodyHeight() {
      return this.height === 'auto' || this.toolbarHeight === 'auto'
             ? 'auto'
             : `calc(${this.height} - ${this.toolbarHeight})`
    }
  },
  mounted () {
    this.calcToolbarSize()
  },
  methods: {
    calcToolbarSize () {
      if (this.enableScrollbar) {
        this.toolbarWidth = (this.$refs.toolbar as HTMLElement).clientWidth + 'px'
        this.toolbarHeight = (this.$refs.toolbar as HTMLElement).clientHeight + 'px'
      } else {
        this.toolbarWidth = '100%'
        this.toolbarHeight = 'auto'
      }
    }
  }
})
</script>

<style scoped>
  .classic-editor {
    width: 100%;
    height: var(--editorHeight);
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    border: 0;
  }
  .classic-editor .classic-editor-toolbar {
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    border: 0;
    overflow: auto;
  }
  .classic-editor .classic-editor-toolbar .cover {
    display: none;
  }
  .classic-editor.affix-toolbar .classic-editor-toolbar {
    width: var(--toolbarWidth);
    height: var(--toolbarHeight);
  }
  .classic-editor.affix-toolbar .classic-editor-toolbar :deep(.affix) {
    z-index: 9999;
    width: var(--toolbarWidth);
  }
  .classic-editor.affix-toolbar .classic-editor-toolbar :deep(.affix .cover) {
    width: var(--toolbarWidth);
    height: 9px;
    background-color: white;
    position: absolute;
    left: 0;
    top: -9px;
    border: 0;
    padding: 0;
    margin: 0;
    display: block;
  }
  .classic-editor.affix-toolbar .classic-editor-toolbar :deep(.affix-bottom) {
    z-index: 9999;
  }
  .classic-editor .classic-editor-body {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
    height: var(--bodyHeight);
    padding: 0;
    margin: 0;
    border: 0;
  }
  .classic-editor.full-screen .classic-editor-body {
    flex-grow: 0;
    flex-shrink: 0;
    overflow: hidden;
  }
  .classic-editor.full-screen .classic-editor-body.scrollbar {
    overflow: scroll;
  }
  .classic-editor.full-screen {
    height: 100% !important;
  }
</style>