'use strict';

const BrowserSyncPlugin       = require('browser-sync-webpack-plugin');
const common = require ('./webpack.common');

module.exports = {
    entry: common.entry,
    output: common.output,
    devtool: 'eval',
    devServer: {
      contentBase: '/dist',
      port: 3100,

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
        /**
          * Inline style loader
          */
        {
          test: /\.scss$/,
          loaders: [
            'style',
            'css?sourceMap',
            'sass?sourceMap'
          ],
        }
      ],
    },
    plugins: [
      /**
        * Use browsersync
        */
      new BrowserSyncPlugin(
        {
          host: 'localhost',
          port: 3000,
          proxy: 'http://localhost:3100/',
        },
        {
          reload: false,
        }
      ),
    ].concat(common.plugins),
}

