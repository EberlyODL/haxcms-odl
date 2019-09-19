// @ts-nocheck
const { terser } = require('rollup-plugin-terser');
const path = require('path');
const autoExternal = require('rollup-plugin-auto-external');
const rewriteImports = require('rollup-plugin-rewrite-imports');
const production = false;
module.exports = function() {
  return {
    input: 'src/custom.js',
    treeshake: !!production,
    output: {
      file: `build/custom.es6.js`,
      format: 'esm',
      sourcemap: false,
    },
    plugins: [
      autoExternal({
        builtins: false,
        dependencies: true,
        packagePath: path.resolve('/haxcms/package.json'),
        peerDependencies: false,
      }),
      rewriteImports(`../../build/es6/node_modules/`),
      // only minify if in production
      production && terser(),
    ],
  };
};