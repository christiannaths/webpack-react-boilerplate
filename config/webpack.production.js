const Webpack = require('webpack');
// const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common');

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
    ].concat(common.module.loaders),
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
     */
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    /**/
    new ExtractTextPlugin('assets/style.css'),
  ].concat(common.plugins),
};
