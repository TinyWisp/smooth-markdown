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
    comp: () => import('./plugins/CustomCodeBlockRenderer/index.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./plugins/CustomCodeBlockRenderer/index.vue?raw')
      },
      {
        title: 'Echarts.vue',
        code: () => import('./plugins/CustomCodeBlockRenderer/Echarts.vue?raw')
      },
      {
        title: 'ArtText.jsx',
        code: () => import('./plugins/CustomCodeBlockRenderer/ArtText.jsx?raw')
      },
      {
        title: 'Card.vue',
        code: () => import('./plugins/CustomCodeBlockRenderer/Card.vue?raw')
      },
      {
        title: 'cnt.md',
        code: () => import('./plugins/CustomCodeBlockRenderer/cnt.md?raw')
      }
    ]
  },

  '/plugins/auto-height': {
    comp: () => import('./plugins/AutoHeight/index.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./plugins/AutoHeight/index.vue?raw')
      }
    ]
  },

  '/examples/custom-appearances': {
    comp: () => import('./examples/CustomAppearances/index.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./examples/CustomAppearances/index.vue?raw')
      },
      {
        title: 'mySetup.js',
        code: () => import('./examples/CustomAppearances/mySetup.js?raw')
      },
      {
        title: 'viewer.style',
        code: () => import('./examples/CustomAppearances/viewer.style?raw')
      }
    ]
  },

  '/plugins/lang-zh-cn': {
    comp: () => import('./plugins/LangZhCN.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./plugins/LangZhCN.vue?raw')
      }
    ]
  },

  '/plugins/lang': {
    comp: () => import('./plugins/Lang.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./plugins/Lang.vue?raw')
      }
    ]
  },

  '/vuetify-toolbar/custom-toolbar-items': {
    comp: () => import('./vuetify-toolbar/CustomToolbarItems/index.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./vuetify-toolbar/CustomToolbarItems/index.vue?raw')
      },
      {
        title: 'BoldButton.vue',
        code: () => import('./vuetify-toolbar/CustomToolbarItems/BoldButton.vue?raw')
      }
    ]
  },

  '/element-toolbar/custom-toolbar-items': {
    comp: () => import('./element-toolbar/CustomToolbarItems/index.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./element-toolbar/CustomToolbarItems/index.vue?raw')
      },
      {
        title: 'BoldButton.vue',
        code: () => import('./element-toolbar/CustomToolbarItems/BoldButton.vue?raw')
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

  '/examples/operations': {
    comp: () => import('./examples/Operations.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./examples/Operations.vue?raw')
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