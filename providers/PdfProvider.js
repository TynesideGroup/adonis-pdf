'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class PDFProvider extends ServiceProvider {

  register () {
    this.app.singleton('PDF', (app) => {
      const Config = app.use('Adonis/Src/Config')
      const PDF = require('../src/PDF')

      return new PDF(Config)
    })
  }

}

module.exports = PDF
