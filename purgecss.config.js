/* eslint-disable import/no-extraneous-dependencies */
const glob = require('glob')

class Extractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = {
  css: glob.sync('dist/**/*.css'),
  content: glob.sync('dist/**/*.*(html|js)'),
  whitelist: ['app', 'html', 'body', 'fa', 'svg', 'animated'],
  whitelistPatterns: [/[A-Za-z0-9_-]+__[A-Za-z0-9_-]+/, /^fa-.*/, /^svg-.*/, /^animated.*/, /^slide.*/],
  extractors: [
    {
      extractor: Extractor,
      extensions: ['html', 'js', 'jsx', 'ts', 'tsx', 'css', 'scss'],
    },
  ],
}
