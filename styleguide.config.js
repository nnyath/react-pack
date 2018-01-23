const webpackDevConfig = require('./webpack.dev.js')

module.exports = {
  ignore: ['**/__tests__/**', '**/*.test.js', '**/*.spec.js', '**/__mocks__/**', '**/containers/**/*.js'],
  webpackConfig: webpackDevConfig
}
