/* jshint node: true */
var path = require('path')
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

module.exports = {
  context: path.join(__dirname),
  entry: './lib/index.js',

  plugins: [
    new CaseSensitivePathsPlugin()
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'ReactTangleResult'
  },

  externals: {
    'react': 'var React',
    'react/addons': 'var React'
  },

  module: {
    loaders: [
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'es2016', 'react']
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  }
}
