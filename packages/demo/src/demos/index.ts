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
  '/getting-started/vuetify-toolbar': {
    comp: () => import('./getting-started/VuetifyToolbar/index.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./getting-started/VuetifyToolbar/index.vue?raw')
      },
      {
        title: 'main.js',
        code: () => import('./getting-started/VuetifyToolbar/main.js?raw')
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
      },
      {
        title: 'main.js',
        code: () => import('./getting-started/ElementToolbar/main.js?raw')
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
      },
      {
        title: 'Card.vue',
        code: () => import('./plugins/CustomCodeBlockRendererExample/Card.vue?raw')
      },
      {
        title: 'cnt.md',
        code: () => import('./plugins/CustomCodeBlockRendererExample/cnt.md?raw')
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

  '/vuetify-toolbar/custom-toolbar-items': {
    comp: () => import('./vuetify-toolbar/CustomToolbarItemsExample/index.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./vuetify-toolbar/CustomToolbarItemsExample/index.vue?raw')
      },
      {
        title: 'BoldButton.vue',
        code: () => import('./vuetify-toolbar/CustomToolbarItemsExample/BoldButton.vue?raw')
      }
    ]
  },

  '/element-toolbar/custom-toolbar-items': {
    comp: () => import('./element-toolbar/CustomToolbarItemsExample/index.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./element-toolbar/CustomToolbarItemsExample/index.vue?raw')
      },
      {
        title: 'BoldButton.vue',
        code: () => import('./element-toolbar/CustomToolbarItemsExample/BoldButton.vue?raw')
      }
    ]
  },

  '/examples/custom-size': {
    comp: () => import('./examples/CustomSize.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./examples/CustomSize.vue?raw')
      }
    ]
  },

  '/examples/extending-markdown-syntax': {
    comp: () => import('./examples/ExtendingMarkdownSyntax/index.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./examples/ExtendingMarkdownSyntax/index.vue?raw')
      },
      {
        title: 'cnt.md',
        code: () => import('./examples/ExtendingMarkdownSyntax/cnt.md?raw')
      }
    ]
  },
}

export default demoMap