'use strict'

const { join } = require('path')
const { Command } = require('@adonisjs/ace')

class GetConfig extends Command {

  static get signature () {
    return 'pdf:getconfig'
  }

  static get description () {
    return 'Adds the default config/pdf.js file to your project.'
  }

  async _ensureInProjectRoot () {
    const acePath = join(process.cwd(), 'ace')
    const exists = await this.pathExists(acePath)

    if (!exists) {
      throw new Error('You must be inside an Adonis application to run the pdf:getconfig command.')
    }
  }

  async _getConfigPath () {
    return join(process.cwd(), 'config')
  }

  async _generateConfigFile (configPath) {
    const template = await this.readFile(join(__dirname, '../config/pdf.js'), 'utf-8')
    await this.generateFile(configPath, template)
  }

  async handle () {
    try {
      const configPath = this._getConfigPath()

      await this._ensureInProjectRoot()
      await this._generateConfigFile(join(configPath, 'pdf.js'))
      this.completed('create', )
    } catch (error) {
      if (!this.viaAce) throw error
      this.error(error.message)
    }
  }

}

module.exports = GetConfig
