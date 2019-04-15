/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const mkdirp = require('mkdirp')
const _ = require('lodash-es')

const tmpFolder = path.join(process.cwd(), 'src', '.app')
const templateFile = path.join(__dirname, 'template.js')
const processFile = path.join(tmpFolder, 'process.js')
const templateString = fs.readFileSync(templateFile, 'utf8')

// We only want clients envs
const isClientEnv = (_value, key) => key.includes('CLIENT_')

const generate = () => {
  const dotenv = require('dotenv').config()
  const envs = Object.entries(_.pickBy(dotenv.parsed, isClientEnv))
  const output = _.template(templateString)({envs})

  mkdirp.sync(tmpFolder) // make the folder if it does not exist

  const options = prettier.resolveConfig.sync('.prettierrc')
  const parser = 'babel'
  const formatted = prettier.format(output, {parser, ...options})

  fs.writeFileSync(processFile, formatted)
}

module.exports = generate
