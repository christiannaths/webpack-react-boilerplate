const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PATHS = require('./paths');

const config = {
  entry: path.join(PATHS.src, 'index.js'),
  output: {
    filename: 'assets/index.js',
    path: PATHS.dist,
    publicPath: '/',
  },
  module: {
    loaders: [
      /**
       * ES6/React loader
       */
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(PATHS.src, 'index.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
};

module.exports = config;
