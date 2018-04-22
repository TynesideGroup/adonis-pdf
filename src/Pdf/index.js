'use strict'

const { join } = require('path')
const stream = require('stream')
const PdfPrinter = require('pdfmake/src/printer')
const defaultConfig = require('../../config/pdf.js')

class PDF  {

  constructor (Config) {
    this.options = Config.merge('pdf', defaultConfig)
  }

  _setupPrinter () {
    this.printer = new PdfPrinter(
      (this.options.fonts !== null && typeof this.options.fonts === 'object')
        ? this.options.fonts
        : {
            Roboto: {
              normal: join(__dirname, '..', '..', 'assets/fonts/Roboto-Regular.ttf'),
              bold: join(__dirname, '..', '..', 'assets/fonts/Roboto-Medium.ttf'),
              italics: join(__dirname, '..', '..', 'assets/fonts/Roboto-Italic.ttf'),
              bolditalics: join(__dirname, '..', '..', 'assets/fonts/Roboto-MediumItalic.ttf')
            },
            RobotoBold: {
              normal: join(__dirname, '..', '..', 'assets/fonts/Roboto-Bold.ttf'),
              italics: join(__dirname, '..', '..', 'assets/fonts/Roboto-BoldItalic.ttf')
            },
            RobotoBlack: {
              normal: join(__dirname, '..', '..', 'assets/fonts/Roboto-Black.ttf'),
              italics: join(__dirname, '..', '..', 'assets/fonts/Roboto-BlackItalic.ttf')
            },
            RobotoLight: {
              normal: join(__dirname, '..', '..', 'assets/fonts/Roboto-Light.ttf'),
              italics: join(__dirname, '..', '..', 'assets/fonts/Roboto-LightItalic.ttf')
            },
            RobotoThin: {
              normal: join(__dirname, '..', '..', 'assets/fonts/Roboto-Thin.ttf'),
              italics: join(__dirname, '..', '..', 'assets/fonts/Roboto-ThinItalic.ttf'),
            }
          }
    )
    this.definition = {}
  }

  _configureStyles () {
    if (
      this.options.styles !== null &&
      typeof this.options.styles === 'object'
    ) {
      this.definition.styles = this.options.styles
    }
  }

  _configureHeader () {
    if (
      this.options.header !== null &&
      (typeof this.options.header === 'string' || typeof this.options.header === 'function')
    ) {
      this.definition.header = this.options.header
    }
  }

  _configureFooter () {
    if (
      this.options.footer !== null &&
      (typeof this.options.footer === 'string' || typeof this.options.footer === 'function')
    ) {
      this.definition.footer = this.options.footer
    }
  }

  _configureBackground () {
    if (
      this.options.background !== null &&
      (typeof this.options.background === 'string' || typeof this.options.background === 'function')
    ) {
      this.definition.background = this.options.background
    }
  }

  _hasPageConfigurationOption (prop) {
    return (this.options.page !== null && typeof this.options.page === 'object') &&
      this.options.page.hasOwnProperty(prop)
  }

  _configurePageSize () {
    if (this._hasPageConfigurationOption('size')) {
      if (this_.isOfType(this.options.page.size, 'string')) {
        this.definition.pageSize = this.options.page.size
      }
      if (this_.isOfType(this.options.page.size, 'object')) {
        if (
          this.options.page.size.hasOwnProperty('width') &&
          this.options.page.size.hasOwnProperty('height')
        ) {
          this.definition.pageSize = this.options.page.size
        } else {
          throw new Error('page.size configuration must have "width" and "height" properties if passed as an Object')
        }
      }
    }
  }

  _configurePageOrientation () {
    if (this._hasPageConfigurationOption('orientation')) {
      if (this._isOfType(this.options.page.orientation, 'string')) {
        this.definition.pageOrientation = this.options.page.orientation
      } else {
        throw new Error('page.orientation configuration must be a String')
      }
    }
  }

  _configurePageMargins () {
    if (this._hasPageConfigurationOption('margins')) {
      if (
        Array.isArray(this.options.page.margins) &&
        (this.options.page.margins.length === 2 || this.options.page.margins.length === 4)
      ) {
        this.definition.pageMargins = this.options.page.margins
      } else {
        throw new Error('page.margin configuration must be an Array of either [left, top, right, bottom] or [horizontal, vertical]')
      }
    }
  }

  _applyConfiguration () {
    this._configureStyles()
    this._configureHeader()
    this._configureFooter()
    this._configureBackground()
    this._configurePageSize()
    this._configurePageOrientation()
    this._configurePageMargins()
  }

  _finaliseDefinition (content) {
    return this.definition.content = content
  }

  _generatePDF () {
    return this.document = this.printer.createPdfKitDocument(this.definition)
  }

  _pipeTo (_stream) {
    if (
      _stream instanceof stream.Readable ||
      _stream instanceof stream.Writable ||
      _stream instanceof stream.Stream
    ) {
      return this.document.pipe(_stream)
    } else {
      throw new Error('You may only pipe to a readable/writeable stream.')
    }
  }

  _end () {
    return this.document.end()
  }

  _isOfType (prop, type) {
    return typeof prop === type
  }

  create (_content, _stream) {
    try {
      if (Array.isArray(_content)) {
        this._setupPrinter()
        this._applyConfiguration()
        this._finaliseDefinition(_content)
        this._generatePDF()
        this._pipeTo(_stream)
        return this._end()
      } else {
        throw new Error('Your PDF content must be an Array.')
      }
    } catch (error) {
      throw { status: 'error', error: error }
    }
  }

}

module.exports = PDF
