/* eslint global-require: 0 */

const
  webpack = require('webpack'),
  configMerge = require('webpack-merge'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),

  CONTEXT = path.join(__dirname, 'src')

module.exports = configMerge.smart(require('./webpack.base.js'), {
  context: CONTEXT,
  entry: {
    app: [
      './index.js'
    ]
  },
  devServer: {
    hot: true,
    contentBase: 'src',
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {'Access-Control-Allow-Origin': '*'}
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: true
    })
  ],
  devtool: 'source-map'
})
