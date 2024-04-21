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

  '/plugins/affix-toolbar': {
    comp: () => import('./plugins/AffixToolbarExample.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./plugins/AffixToolbarExample.vue?raw')
      }
    ]
  },

  '/plugins/perfect-scrollbar': {
    comp: () => import('./plugins/PerfectScrollbarExample/index.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./plugins/PerfectScrollbarExample/index.vue?raw')
      }
    ]
  },

  '/plugins/overlay-scrollbars': {
    comp: () => import('./plugins/OverlayScrollbarsExample/index.vue'),
    height: '500px',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./plugins/OverlayScrollbarsExample/index.vue?raw')
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


  '/plugins/highlight-code-block-in-editable-area': {
    comp: () => import('./plugins/HighlightCodeBlockInEditableAreaExample/index.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./plugins/HighlightCodeBlockInEditableAreaExample/index.vue?raw')
      },
      {
        title: 'cnt.md',
        code: () => import('./plugins/HighlightCodeBlockInEditableAreaExample/cnt.md?raw')
      }
    ]
  },

  '/plugins/sync-scrollbar': {
    comp: () => import('./plugins/SyncScrollbarExample/index.vue'),
    height: 'auto',
    codeTabs: [
      {
        title: 'index.vue',
        code: () => import('./plugins/SyncScrollbarExample/index.vue?raw')
      },
      {
        title: 'cnt.txt',
        code: () => import('./plugins/SyncScrollbarExample/cnt.txt?raw')
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