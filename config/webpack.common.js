'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PATHS = require('./paths');


module.exports = {
  entry: path.join(PATHS.src, 'index.js'),
  output: {
    filename: 'assets/index.js',
    path: PATHS.dist,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(PATHS.src, 'index.html'),
      minify: {
        collapseWhitespace: true,
      }
    }),
  ]
}
