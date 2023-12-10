<template>
  <div 
    class="classic-editor">
    <div class="classic-editor-extra">
      <slot name="classic-editor-extra"></slot>
    </div>
    <div class="classic-editor-toolbar">
      <slot name="classic-editor-toolbar" v-if="showToolbar"></slot>
    </div>
    <div class="classic-editor-body">
      <div class="classic-editor-body-edit-wrapper" v-if="showEdit">
        <slot name="classic-editor-body-edit"></slot>
      </div>
      <div class="classic-editor-body-view-wrapper" v-if="showView">
        <slot name="classic-editor-body-view"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    showToolbar: {
      type: Boolean,
      default: true
    },
    showEdit: {
      type: Boolean,
      default: true
    },
    showView: {
      type: Boolean,
      default: true
    }
  }
})
</script>

<style scoped>
.classic-editor {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border: 0;
  overflow: hidden;
}

.classic-editor-extra {
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
  position: absolute;
  left: 0;
  top: 0;
  flex-shrink: 0;
  flex-grow: 0;
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
.classic-editor .classic-editor-body {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 30em;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
}
.classic-editor .classic-editor-body .classic-editor-body-edit-wrapper,
.classic-editor .classic-editor-body .classic-editor-body-view-wrapper
{
  flex-basis: 50%;
  flex-shrink: 0;
  flex-grow: 1;
  height: 100%;
  overflow: auto;
}


.classic-editor .classic-editor-body .classic-editor-body-edit-wrapper {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}
</style>