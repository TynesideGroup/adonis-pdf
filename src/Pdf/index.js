'use strict'

const PdfPrinter = require('pdfmake/src/printer')

const defaultConfig = require('../../config/pdf.js')

class Pdf  {

  constructor (Config) {

    this.options = Config.merge('pdf', defaultConfig)

    this.printer = new PdfPrinter(
      (this.options.fontDescriptors !== null && typeof this.options.fontDescriptors === 'object') ? this.options.fontDescriptors : {
        Roboto: {
          normal: '../../assets/fonts/Roboto-Regular.ttf',
          bold: '../../assets/fonts/Roboto-Medium.ttf',
          italics: '../../assets/fonts/Roboto-Italic.ttf',
          bolditalics: '../../assets/fonts/Roboto-MediumItalic.ttf'
        },
        RobotoBold: {
          normal: '../../assets/fonts/Roboto-Bold.ttf',
          italics: '../../assets/fonts/Roboto-BoldItalic.ttf'
        },
        RobotoBlack: {
          normal: '../../assets/fonts/Roboto-Black.ttf',
          italics: '../../assets/fonts/Roboto-BlackItalic.ttf'
        },
        RobotoLight: {
          normal: '../../assets/fonts/Roboto-Light.ttf',
          italics: '../../assets/fonts/Roboto-LightItalic.ttf'
        },
        RobotoThin: {
          normal: '../../assets/fonts/Roboto-Thin.ttf',
          italics: '../../assets/fonts/Roboto-ThinItalic.ttf',
        }
      }
    )
  }

  create (content) {
    if (typeof content === 'object') {
      return this.printer.createPdfKitDocument(content)
    } else {
      throw { status: 'error', message: 'PDF content must be an Object' }
    }
  }

}

module.exports = Pdf
