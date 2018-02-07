'use strict'

const test = require('japa')
const fs = require('fs')
// const base64 = require('base64-stream')
const { Config } = require('@adonisjs/sink')

const Pdf = require('../src/Pdf')

test.group('Pdf', () => {

  test('apply default fonts when options.fontDescriptors is not set', (assert) => {
    const config = new Config()
    // not setting any config
    const pdf = new Pdf(config)
    assert.deepEqual(pdf.printer.fontDescriptors, {
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
    })
  })

  test('apply fonts from config when options.fontDescriptors is an object', (assert) => {
    const config = new Config()
    config.set('pdf.fontDescriptors', {
      Roboto: {
        normal: '../../assets/fonts/Roboto-Regular.ttf'
      }
    })
    const pdf = new Pdf(config)
    assert.deepEqual(pdf.printer.fontDescriptors, {
      Roboto: {
        normal: '../../assets/fonts/Roboto-Regular.ttf'
      }
    })
  })

})
