# Webpack Config

Webpack is set up with a fairly standard configuration, but there are a few notable differences. The first is that the config is split into three parts:
  - development config
  - production config
  - a config that is common to both

Both development & production configs inherit from common. Depending on the value of `NODE_ENV` (which defaults to `development`), either the development or proudction config is loaded and used. For example, to do a build in production mode, you can run `NODE_ENV=production npm run build` from the command line (which is aliased to `npm run build:production` in this project).


## Paths Config

source: https://github.com/christiannaths/webpack-react-boilerplate/blob/master/config/paths.js

  - used as a common location to set up which directories in your project are used for entry and output paths.


## Common Config

source: https://github.com/christiannaths/webpack-react-boilerplate/blob/master/config/webpack.common.js

  - [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) - Generates index.html file with bundles automatically injected
  - sets up `entry` and `output` options


## Development Config

source: https://github.com/christiannaths/webpack-react-boilerplate/blob/master/config/webpack.development.js

  - JS: using `babel-loader` with the `es2015` and `react` presets
  - Styles: using `sass-loader`, `css-loader`, and injecting styles directly into index.html via `style-loader`
  - [browser-sync-webpack-plugin](https://github.com/Va1/browser-sync-webpack-plugin) for using BrowserSync alongside Webpack
  - BrowserSync runs on port `3000`, which is proxying [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) on port `3100`


## Production Config

source: https://github.com/christiannaths/webpack-react-boilerplate/blob/master/config/webpack.production.js

The production config is (and should be) very similar to the development config; however, there are some important and notable changes:

  - [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) is being used to create a `.css` bundle instead of injecting a style tag directly into the html
  - JS is being minified via [Webpack's UglifyJS plugin](https://webpack.github.io/docs/optimization.html)
  - CSS is Autoprefixed via [postcss-loader](https://github.com/postcss/postcss-loader)
