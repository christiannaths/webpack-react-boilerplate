# Basic React & Webpack Setup

## Features

  * Handles building for production & development environments
  * Sass (scss) for styles

## Install

  1. `git clone http://github.com/christiannaths/react-boilerplate && cd react-boilerplate`
  * `npm install`

## Config
  Webpack config files are found in the `./config/` directory, and are loaded
  into the main webpack config depending on the value of `NODE_ENV`. Currently
  only `development` and `production` are supported.

## Development

  * `npm start` Runs a dev server on localhost:3000 with BrowserSync attached
  * `npm run build` Builds your app in development mode to `./dist/` directory

## Production

  * `npm run build:production` Builds your app for production
