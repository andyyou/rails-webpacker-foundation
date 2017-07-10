const webpack = require('webpack')

module.exports = {
  shared: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        "window.jQuery": 'jquery'
      })
    ]
  }
}