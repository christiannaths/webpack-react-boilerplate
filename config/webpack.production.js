'use strict';

const path                    = require('path');
const Webpack                 = require('webpack');
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const autoprefixer            = require('autoprefixer');
const ExtractTextPlugin       = require('extract-text-webpack-plugin');

const common = require ('./webpack.common');
const PATHS = require('./paths');

module.exports = {
    entry: common.entry,
    output: common.output,
    module: {
      loaders: [
        /**
          * Style loader (bundled)
          */
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(
            'style-loader',
            [
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ].join('!')
          ),
        },
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
      /**
       * Minify JS
       */
      new Webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        output: { comments: false },
        sourceMap: true,
      }),
      /**
       * Get node env for prodicton
       * @type {[type]}
       */
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      /**/
      new ExtractTextPlugin('assets/style.css'),
    ].concat(common.plugins),
}

