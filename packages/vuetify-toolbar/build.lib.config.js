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
import vuetify from 'vite-plugin-vuetify'

const esbrowserslist = ['last 2 versions and > 2%'];

const projectRoot = path.resolve(__dirname, '.');

const baseConfig = {
  plugins: {
    preVue: [
      alias({
        entries: [
          {
            find: '@',
            replacement: `${path.resolve(projectRoot, 'src')}`,
          },
        ],
        customResolver: resolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        }),
      }),
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
      plugins: ['@vue/babel-plugin-jsx'],
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
      preferBuiltins: false
    }
  },
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'vue',
  'vuetify',
  '@smooth-vue-markdown-editor/core'
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: 'Vue',
  vuetify: 'Vuetify'
};

// Customize configs for individual targets
const builds = [];

// ------ CoreEditor --------
builds.push({
  input: 'src/entry.ts',
  external,
  output: {
    file: 'lib/index.esm.js',
    format: 'esm',
    exports: 'named',
    globals
  },
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
    vuetify()
  ],
});

builds.push({
  input: 'src/entry.ts',
  external,
  output: {
    file: 'lib/index.umd.js',
    format: 'umd',
    exports: 'named',
    name: 'CoreEditor',
    globals
  },
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
    vuetify()
  ],
});

builds.push({
  input: 'lib/types/entry.d.ts',
  output: {
    file: 'lib/index.d.ts',
    format: 'esm'
  },
  plugins: [
    dts.default()
  ]
});
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
