const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const common = require('./webpack.common');

const config = {
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
       * Inline style loader
       */
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?sourceMap',
          'sass?sourceMap',
        ],
      },
    ].concat(common.module.loaders),
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
};

module.exports = config;
