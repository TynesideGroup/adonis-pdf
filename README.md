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
- Add `'adonis-pdf/providers/PdfProvider'` to the `providers` array within `start/app.js`

## Usage
`PDF.create()` accepts two parameters:

* `definition`: Object representing the PDF content/styles etc
* `stream`: A Readable or Writeable Stream the PDF will be piped to

## Example
```js
'use strict'

const PDF = use('PDF')

class MyController {

  async generatePdf ({ response }) {

    const definition = {
      content: [
        {
          text: 'test',
          style: 'header'
        }
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true
        }
      }
    }

    PDF.create(definition, response.response)

    return response
  }

}
```
