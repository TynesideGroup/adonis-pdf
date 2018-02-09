'use strict'

/**
 * For more details on each configuration option see http://pdfmake.org/#/gettingstarted.
 * Some of the configuration options have a slightly different name than their pdfmake
 * counterparts but they should still be self-explanatory.
 */

module.exports = {

  /*
  |--------------------------------------------------------------------------
  | Custom Font descriptors
  |--------------------------------------------------------------------------
  |
  | Override the default list of fonts to be used in the pdfmake instance.
  | This value must be an Object.
  |
  */
  fonts: null,

  /*
  |--------------------------------------------------------------------------
  | Custom style dictionaries
  |--------------------------------------------------------------------------
  |
  | If you reuse the same styles across your document(s) you can set them
  | here and they will be available for use within your content.
  |
  */
  styles: {},

  /*
  |--------------------------------------------------------------------------
  | Custom header
  |--------------------------------------------------------------------------
  |
  | Set a header for each page. This value must be a String or a Function.
  |
  */
  header: null,

  /*
  |--------------------------------------------------------------------------
  | Custom footer
  |--------------------------------------------------------------------------
  |
  | Set a footer for each page. This value must be a String or a Function.
  |
  */
  footer: null,

  /*
  |--------------------------------------------------------------------------
  | Custom background
  |--------------------------------------------------------------------------
  |
  | Set a background for each page. This value must be a String or a
  | Function.
  |
  */
  background: null,

  /*
  |--------------------------------------------------------------------------
  | Custom page configuration
  |--------------------------------------------------------------------------
  |
  | Set up the page configuration for each page of your PDFs.
  |
  */
  page: {
    size: null,
    orientation: null,
    margins: null
  }

}
