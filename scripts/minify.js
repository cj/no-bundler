/* eslint-disable import/no-extraneous-dependencies */
const glob = require('glob')
const nodeMinify = require('@node-minify/core')
const cleanCSS = require('@node-minify/clean-css')
const terser = require('@node-minify/terser')
const fs = require('fs')

const minify = (dir = 'dist') => {
  const run = async (type, compressor, options) => {
    const files = glob.sync(`${dir}{/**,}*.${type}`, {realpath: true})

    files.map(async file => {
      const callback = (error, data) => {
        if (error) return console.log(error)

        return fs.writeFile(
          file,
          data,
          'utf8',
          writeError => writeError && console.error(writeError),
        )
      }

      nodeMinify({options, compressor, callback, input: file, output: file})
    })

    return Promise.all(files)
  }

  Promise.all([
    run('css', cleanCSS, {level: {1: {specialComments: 0}}}),
    run('js', terser, {mangle: true, compress: true}),
  ])
}

module.exports = minify
