import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    babel({
      exclude: 'src/web_modules/**',
    }),
  ],
}
