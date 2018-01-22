/* eslint global-require: 0 */

const
  webpack = require('webpack'),
  configMerge = require('webpack-merge'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  env = require('./env').dev

module.exports = configMerge.smart(require('./webpack.base.js'), {
  devServer: {
    hot: true,
    contentBase: 'src',
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {'Access-Control-Allow-Origin': '*'}
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev')
      },
      'process.consts': JSON.stringify(env)
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
