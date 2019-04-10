/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postcssPresetEnv = require('postcss-preset-env')

const plugins = [
  autoprefixer,
  postcssFlexbugsFixes,
  postcssPresetEnv({
    autoprefixer: {
      flexbox: 'no-2009',
    },
    stage: 3,
  }),
]

module.exports = { plugins }
