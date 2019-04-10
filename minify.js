const glob = require('glob')
const minify = require('@node-minify/core')
const cleanCSS = require('@node-minify/clean-css')
const terser = require('@node-minify/terser')
const fs = require('fs')

const min = async (type, compressor, { callback: extraCallback, ...options }) => {
  const files = glob.sync(`dist/!(web_modules){/**,}*.${type}`, { realpath: true })

  files.forEach(file => {
    const callback = async (error, data) => {
      if (error) return console.log(error)
      if (extraCallback) data = await extraCallback({ file, data })

      fs.writeFile(file, data, 'utf8', (writeError) => writeError&& console.error(writeError))
    }

    minify({ options, compressor, callback, input: file, output: file })
  })
}

min('css', cleanCSS, {level: {1: {specialComments: 0}}})
min('js', terser, { mangle: true, compress: true })
