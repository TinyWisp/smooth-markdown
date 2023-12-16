
const demoMap = {
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

}

export default demoMap