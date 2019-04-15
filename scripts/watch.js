/* eslint-disable import/no-extraneous-dependencies */
const chokidar = require('chokidar')
const generate = require('./process')

const updateProcessFile = () => {
  generate()
}

const watcher = chokidar.watch('.env', {
  persistent: true,
})

updateProcessFile()

watcher
  .on('add', updateProcessFile)
  .on('change', updateProcessFile)
  .on('unlink', updateProcessFile)
