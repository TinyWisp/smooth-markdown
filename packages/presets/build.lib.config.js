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
  /@lezer/,
  /smooth-markdown/
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

builds.push({
  input: 'src/entry.ts',
  external,
  output: [{
    file: 'lib/index.esm.js',
    format: 'esm',
    exports: 'named',
    globals
  }, {
    file: 'lib/index.umd.js',
    format: 'umd',
    exports: 'named',
    name: 'SmoothMarkdownPresets',
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
    typescript({"moduleResolution": "Node"}),
    resolve(baseConfig.plugins.resolve),
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

// Export config
export default builds;
