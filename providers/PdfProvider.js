'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class PDFProvider extends ServiceProvider {

  _registerPDF () {
    this.app.singleton('PDF', (app) => {
      const Config = app.use('Adonis/Src/Config')
      const PDF = require('../src/pdf2')
      return new PDF(Config)
    })
  }

  _registerCommands () {
    this.app.bind('PDF:GetConfig', (app) => require('../commands/GetConfig'))
  }

  register () {
    this._registerPDF()
    this._registerCommands()
  }

  boot () {
    const ace = require('@adonisjs/ace')
    ace.addCommand('PDF:GetConfig')
  }

}

module.exports = PDFProvider
