import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import alias from 'rollup-plugin-alias'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import path from 'path'

export default {
  input: 'src/index.js',
  output: {
    // entryFileNames: '[name]-[hash].js',
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    replace({
      exclude: '(src/lib/async-import.js|src/web_modules/**)',
      delimiters: ['', ''],
      '/web_modules/react-bootstrap.js': 'react-bootstrap',
      'asyncImport(': 'import(',
    }),
    alias({
      react: path.resolve('./src/web_modules/preact/compat.js'),
      'react-dom': path.resolve('./src/web_modules/preact/compat.js'),
    }),
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'src/web_modules/**',
    }),
    globals(),
  ],
}
