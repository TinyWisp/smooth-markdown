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
      preventAssignment: true
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
    resolve: {}
  },
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'vue',
  'codemirror',
  '@codemirror/state',
  '@codemirror/view',
  '@codemirror/language-data'
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: 'Vue',
};

// Customize configs for individual targets
const builds = [];

/*
buildPlugin('HandleImageClickPlugin');
buildPlugin('PasteImagePlugin');
buildPlugin('CustomCodeBlockRendererPlugin');
buildPlugin('CustomLinkAttrsPlugin');
buildPlugin('HighlightCodeBlockInEditableAreaPlugin');
buildAsyncPlugin('HighlightCodeBlockWithHljsPlugin');
buildAsyncPlugin('HighlightCodeBlockWithCmPlugin');
*/
buildAllPluginsInOne();

// ----- build a plugin ------
function buildPlugin(pluginName) {
  const input = `src/plugins/${pluginName}.ts`;
  const flPluginName = pluginName.charAt(0).toLowerCase() + pluginName.substr(1).replace(/Plugin$/, '');
  const outputDir = `lib/${flPluginName}`;
  const outputName = flPluginName;
 
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

  builds.push({
    input: `lib/types/${pluginName}.d.ts`,
    output: {
      file: `lib/${flPluginName}/index.d.ts`,
      format: 'esm'
    },
    plugins: [
      dts.default()
    ]
  });
}

// ---- build a plugin that will import dependencies asyncrously ----
function buildAsyncPlugin(pluginName) {
  const input = `src/plugins/${pluginName}/index.ts`
  const flPluginName = pluginName.charAt(0).toLowerCase() + pluginName.substr(1).replace(/Plugin$/, '');
  const outputDir = `lib/${flPluginName}`;
 
  builds.push({
    input: input,
    external,
    output: {
      dir: outputDir,
      format: 'esm',
      exports: 'named'
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
    input: `lib/types/${pluginName}/index.d.ts`,
    output: {
      dir: `lib/${flPluginName}`,
      format: 'esm'
    },
    plugins: [
      dts.default()
    ]
  })
}


// ---- build all plugins in one ----- 
function buildAllPluginsInOne() {
  const input = `src/index.ts`;
  
  builds.push({
    input: input,
    external,
    output: {
      dir: 'lib/esm',
      format: 'es',
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
      dir: 'lib/cjs',
      format: 'cjs',
      exports: 'named',
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

  builds.push({
    input: `lib/types/index.d.ts`,
    output: {
      file: `lib/esm/index.d.ts`,
      format: 'es'
    },
    plugins: [
      dts.default()
    ]
  });

  builds.push({
    input: `lib/types/index.d.ts`,
    output: {
      file: `lib/cjs/index.d.ts`,
      format: 'cjs'
    },
    plugins: [
      dts.default()
    ]
  });
}


// Export config
export default builds;
