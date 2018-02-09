'use strict'

class ContentBuilder {

  constructor () {
    this.content = []
  }

  addText (text, style = null) {
    this.content.push({ text, style })
  }

  addImage (image, fit = null) {
    this.content.push({ image, fit })
  }

  addTable (table, layout = null) {
    this.content.push({ table, style, layout })
  }

  addAny (obj) {
    this.content.push(obj)
  }

  finalise () {
    return this.content()
  }

}

module.exports = ContentBuilder
