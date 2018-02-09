## Register Provider
You must register the provider inside the `start/app.js` by adding it to the `providers` Array:

```js
const providers = [
  // ...
  'adonis-pdf/providers/PDFProvider'
]

```
## Configuration
Configuration is done through `config/pdf.js`. This file should have automatically been copied to your project during installation if you installed it via adonis-cli. If you installed it with npm or Yarn, or the file was not copied across correctly, you may copy the [config file](config/pdf.js) from this package or run the following command to create it:
```bash
adonis pdf:getconfig
```

By default all configuration options are `null` (i.e. we use the pdfmake defaults) but feel free to override them as per the [pdfmake documentation](http://pdfmake.org/#/gettingstarted):

| Option | Description |
|:---|:---|
| fonts | Customise the fonts used in your PDFs; if no fonts are specified this package will automatically load default Roboto fonts |
| styles | Custom style dictionaries allowing you to maintain consistent styles across each PDF |
| header | Custom header for each page within your PDFs |
| footer | Custom footer for each page within your PDFs |
| background | Custom background for each page within your PDFs |
| page.size | Set the page size to be used |
| page.orientation | Set the page orientation |
| page.margins | Set up the page margins |
