// rollup.config.js
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import PostCSS from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'

const esbrowserslist = ['last 2 versions and > 2%'];

const projectRoot = path.resolve(__dirname, '.');

const baseConfig = {
  plugins: {
    preVue: [
    ],
    replace: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      'preventAssignment': true
    },
    vue: {
    },
    postVue: [
      // Process only `<style module>` blocks.
      PostCSS({
        modules: {
          generateScopedName: '[local]___[hash:base64:5]',
        },
        include: /&module=.*\.css$/,
      }),
      // Process all `<style>` blocks except `<style module>`.
      PostCSS({ include: /(?<!&module=.*)\.css$/ }),
    ],
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/preset-env',
          {
            targets: esbrowserslist,
          },
        ],
        '@babel/preset-typescript',
      ],
    },
    resolve: {
      browser: true,
      preferBuiltins: false,
    }
  },
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'vue',
  /codemirror/,
  /markdown-it/,
  /highlight.js/,
  /@lezer/
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: 'Vue'
};

// Customize configs for individual targets
const builds = [];

buildEditor();
buildAllPluginsInOne();
buildAllRenderersInOne();

// ------ CoreEditor --------
function buildEditor() {
  builds.push({
    input: 'src/entry.core.ts',
    external,
    output: [{
      file: 'lib/core/index.esm.js',
      format: 'esm',
      exports: 'named',
      globals
    }, {
      file: 'lib/core/index.umd.js',
      format: 'umd',
      exports: 'named',
      name: 'MarkdownEditor',
      globals
    }],
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
      commonjs(),
      json(),
      typescript(),
      resolve(baseConfig.plugins.resolve),
    ],
  });

  builds.push({
    input: 'lib/types/entry.core.d.ts',
    output: {
      file: 'lib/core/index.d.ts',
      format: 'esm'
    },
    plugins: [
      dts.default()
    ]
  });
}

// ---- build all plugins in one ----- 
function buildAllPluginsInOne() {
  const input = `src/entry.plugins.ts`;
  
  builds.push({
    input: input,
    external,
    output: [{
      file: 'lib/plugins/index.esm.js',
      format: 'es',
      exports: 'named',
    }, {
      file: 'lib/plugins/index.umd.js',
      format: 'umd',
      exports: 'named',
      name: 'MarkdownEditorPlugins'
    }],
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
      commonjs(),
      typescript(),
      resolve(baseConfig.plugins.resolve),
    ],
  });

  /*
  builds.push({
    input: input,
    output: {
      file: `lib/plugins/esm/index.d.ts`,
      format: 'es'
    },
    plugins: [
      dts.default()
    ]
  });
  */


  builds.push({
    input: `lib/types/entry.plugins.d.ts`,
    output: {
      file: `lib/plugins/index.d.ts`,
      format: 'es'
    },
    plugins: [
      dts.default()
    ]
  });
}

// build all renderers in one
function buildAllRenderersInOne() {
  const input = `src/entry.renderers.ts`;
  
  builds.push({
    input: input,
    external,
    output: [{
      file: 'lib/renderers/index.esm.js',
      format: 'es',
      exports: 'named',
    }, {
      file: 'lib/renderers/index.umd.js',
      format: 'umd',
      exports: 'named',
      name: 'MarkdownEditorRenderers'
    }],
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
      commonjs(),
      typescript(),
      resolve(baseConfig.plugins.resolve),
    ],
  });

  /*
  builds.push({
    input: input,
    output: {
      file: `lib/plugins/esm/index.d.ts`,
      format: 'es'
    },
    plugins: [
      dts.default()
    ]
  });
  */


  builds.push({
    input: `lib/types/entry.renderers.d.ts`,
    output: {
      file: `lib/renderers/index.d.ts`,
      format: 'es'
    },
    plugins: [
      dts.default()
    ]
  });
}

/*
buildPlugin({
  input: 'src/entries/highlightPlugin.ts', 
  outputDir: 'lib/plugins/highlight',
  outputName: 'highlight',
});
buildPlugin({
  input: 'src/entries/handleImageClickPlugin.ts',
  outputDir: 'lib/plugins/handleImageClick',
  outputName: 'handleImageClick',
});
buildPlugin({
  input: 'src/entries/pasteImagePlugin.ts',
  outputDir: 'lib/plugins/pasteImage',
  outputName: 'pasteImage',
});
buildPlugin({
  input: 'src/entries/customCodeBlockRendererPlugin.ts',
  outputDir: 'lib/plugins/customCodeBlockRenderer',
  outputName: 'customCodeBlockRenderer',
});
buildPlugin({
  input: 'src/entries/customLinkAttrsPlugin.ts',
  outputDir: 'lib/plugins/customLinkAttrs',
  outputName: 'customLinkAttrs',
});
// ----- build a plugin ------
function buildPlugin({input, outputDir, outputName}) {
  builds.push({
    input: input,
    external,
    output: {
      file: `${outputDir}/index.esm.js`,
      format: 'esm',
      exports: 'named',
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
      commonjs(),
      typescript(),
      resolve(baseConfig.plugins.resolve),
    ],
  });

  builds.push({
    input: input,
    external,
    output: {
      file: `${outputDir}/index.umd.js`,
      format: 'umd',
      exports: 'named',
      name: outputName,
      globals,
    },
    plugins: [
      replace(baseConfig.plugins.replace),
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      babel(baseConfig.plugins.babel),
      commonjs(),
      typescript(),
      resolve(baseConfig.plugins.resolve)
    ],
  });
}
*/



// Export config
export default builds;
