# adonis-pdf

Service provider for building PDFs using [pdfmake](http://pdfmake.org/).

## Installation
- Run `npm i adonis-pdf` or `yarn add adonis-pdf`
- Create `config/pdf.js` and set any custom fonts you wish to use:
```js
module.exports = {
  fontDescriptors: {
    // my fonts here
  }
}
```
- Add `'adonis-pdf/providers/PdfProvider'` to `start/app.js`

## Usage
```js
'use strict'

const Pdf = use('Pdf')

class MyController {

  async generatePdf ({ response }) {
    const pdf = new PDF({
      // custom config (this will override config/pdf.js )
    })
    const doc = Pdf.create({
      content: [
        { text: 'test' }
      ]
    })

    doc.pipe(response.response)
    doc.end()

    return response
  }

}
```
