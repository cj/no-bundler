module.exports = function babel(api) {
  api.cache(true)

  return {
    presets: [['@babel/preset-env']],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '/': './',
          },
        },
      ],
    ],
  }
}
