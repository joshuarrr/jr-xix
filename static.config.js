import React, { Component } from 'react'

// PostCSS
// import advancedVars from 'postcss-advanced-variables'
// import autoprefixer from 'autoprefixer'
// import calc from 'postcss-calc'
// import colorAlpha from 'postcss-color-alpha'
// import colorFunc from 'postcss-color-function'
// import conditionals from 'postcss-conditionals'
// import customMedia from 'postcss-custom-media'
// import extend from 'postcss-extend'
// import functions from 'postcss-functions'
// import mediaMinMax from 'postcss-media-minmax'
// import nested from 'postcss-nested'
// import postcssImport from 'postcss-import'

// const path = require('path')
//

// const SITE_ROOT = 'http://joshuar.com/'
const siteRoot = '/'

export default {
  getSiteData: async () => ({
    title: 'JOSHUAR 🦁',
  }),

  devServer: {
    port: 3000,
    host: '127.0.0.1',
  },

  // Post CSS Plugin - see react static plugin api
  // https://github.com/nozzle/react-static/tree/master/docs/plugins
  // plugins: [
  //   'postCSS-loader',
  // ],

  Document: class CustomDocument extends Component {
    render () {
      const {
        Html, Head, Body, children,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}


