'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class PDFProvider extends ServiceProvider {

  _registerPDF () {
    this.app.singleton('PDF', (app) => {
      const Config = app.use('Adonis/Src/Config')
      const PDF = require('../src/PDF')
      return new PDF(Config)
    })
  }

  _registerCommands () {
    this.app.bind('Adonis/Commands/PDF:GetConfig', (app) => require('../commands/GetConfig'))
  }

  register () {
    this._registerPDF()
    this._registerCommands()
  }

}

module.exports = PDFProvider
