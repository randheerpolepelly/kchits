var webpack = require('webpack');


module.exports = {
  entry: './public/scripts/index.js',
  output: {
    filename: './public/dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
      }
      ,{ test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};