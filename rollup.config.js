import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'dist/index.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'src/web_modules/**',
    }),
  ],
}
