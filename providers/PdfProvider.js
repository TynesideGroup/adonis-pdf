'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class PdfProvider extends PdfProvider {

  register () {
    this.app.singleton('Mannotuel/Pdf', (app) => {
      const Pdf = require('../src/Pdf')
      return new Pdf(app.use('Adonis/Src/Config'))
    })
  }

}

module.exports = PdfProvider
