'use strict'

const { join } = require('path')

async function copyConfigFile (cli, appRoot) {
  try {
    const template = await cli.command.readFile(join(__dirname, 'config/pdf.js'), 'utf-8')
    await cli.command.generateFile(join(appRoot, 'config/pdf.js'), template, { name: 'pdf' })
    cli.command.completed('create', 'config/pdf.js')
  } catch (error) {
    // ignore error
  }
}

module.exports = async (cli) => {
  const appRoot = cli.helpers.appRoot()
  await copyConfigFile(cli, appRoot)
}
