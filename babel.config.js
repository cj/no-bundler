/* eslint-disable no-template-curly-in-string */
module.exports = function babel(api) {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          // targets: { browsers: 'last 2 versions' },
          modules: false,
        },
      ],
    ],
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
      [
        'transform-imports',
        {
          'react-bootstrap': {
            transform: 'react-bootstrap/es/${member}',
            preventFullImport: true,
          },
        },
      ],
    ],
  }
}
