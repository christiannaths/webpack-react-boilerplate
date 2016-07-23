'use strict';

const nodeEnv   = process.env.NODE_ENV || 'development';
const config    = require('./config/webpack.' + nodeEnv);

module.exports = config;
