# adonis-pdf

Service provider for building PDFs using [pdfmake](http://pdfmake.org/).

## Configuration


## Usage
```js
'use strict'

const Pdf = use('Pdf')

class MyController {

  async generatePdf ({ response }) {
    const pdf = new PDF({
      // custom config (this would override config/pdf.js )
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
