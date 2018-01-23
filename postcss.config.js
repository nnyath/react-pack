const webpack = require('webpack')

module.exports = {
  plugins: [
    require('postcss-import')({ addDependencyTo: webpack }),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: {'preferred-font': 'inherit'}
        }
      }
    }),
    process.env.NODE_ENV === 'production' ? require('cssnano')({preset: 'default'}) : null
  ]
}
