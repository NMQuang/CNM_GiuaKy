'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOOGLE_MAP_ID: '"vinhnguyendacc"',
  GOOGLE_MAP_KEY: '"AIzaSyBO0eTaMrFybrl6x4z7XCLbhaLRA2CsHtg"',
})
