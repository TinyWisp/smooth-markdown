declare module 'markdown-it-image'
declare module 'markdown-it-sup'
declare module 'markdown-it-sub'
declare module 'markdown-it-ins'
declare module 'markdown-it-br'
declare module 'markdown-it-mark'
declare module 'markdown-it-katex-external'
declare module 'markdown-it-deflist'
declare module 'markdown-it-images-preview'
declare module 'markdown-it-link-attributes'
declare module 'markdown-it-math'
declare module 'markdown-it/lib/common/utils'
declare module 'lodash/get'
declare module 'lodash/merge'
declare module 'vue-affix'
declare module 'css-scoped'
declare module 'insert-css'
declare module 'vue3-perfect-scrollbar'
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}