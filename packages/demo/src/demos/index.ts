import type { Component } from 'vue'

export type CodeTab = {
  title: string
  code: () => Promise<any>
}

export type DemoDetail = {
  comp: () => Promise<Component>
  height: string
  codeTabs: CodeTab[]
}

export type DemoMap = {
  [key: string]: DemoDetail
}

const demoMap: DemoMap = {
  '/playground': {
    comp: () => import('./playground/index.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./playground/index.vue?raw')
      }
    ]
  },

  '/getting-started/vuetify-toolbar': {
    comp: () => import('./getting-started/VuetifyToolbar/index.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./getting-started/VuetifyToolbar/index.vue?raw')
      }
    ]
  },

  '/getting-started/element-toolbar': {
    comp: () => import('./getting-started/ElementToolbar/index.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./getting-started/ElementToolbar/index.vue?raw')
      }
    ]
  },
 

  '/plugins/custom-code-block-renderer': {
    comp: () => import('./plugins/CustomCodeBlockRendererExample/index.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./plugins/CustomCodeBlockRendererExample/index.vue?raw')
      },
      {
        title: 'Echarts.vue',
        code: () => import('./plugins/CustomCodeBlockRendererExample/Echarts.vue?raw')
      },
      {
        title: 'ArtText.jsx',
        code: () => import('./plugins/CustomCodeBlockRendererExample/ArtText.jsx?raw')
      }
    ]
  },

  '/plugins/auto-height': {
    comp: () => import('./plugins/AutoHeightExample/index.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./plugins/AutoHeightExample/index.vue?raw')
      }
    ]
  },

  '/examples/codemirror-theme': {
    comp: () => import('./examples/CodeMirrorTheme/index.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./examples/CodeMirrorTheme/index.vue?raw')
      },
      {
        title: 'cnt.md',
        code: () => import('./examples/CodeMirrorTheme/cnt.md?raw')
      }
    ]
  },

  '/examples/view-theme': {
    comp: () => import('./examples/ViewTheme/index.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./examples/ViewTheme/index.vue?raw')
      },
      {
        title: 'cnt.md',
        code: () => import('./examples/ViewTheme/cnt.md?raw')
      },
      {
        title: 'theme.css',
        code: () => import('./examples/ViewTheme/theme.css?raw')
      }
    ]
  },

  '/renders/hljs': {
    comp: () => import('./renders/hljs/index.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./renders/hljs/index.vue?raw')
      },
      {
        title: 'cnt.md',
        code: () => import('./renders/hljs/cnt.md?raw')
      }
    ],
  }
}

export default demoMap