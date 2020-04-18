const proxy = require('./devProxy')
const fs = require('fs')
const path = require('path')

module.exports = {
  contentBase: path.join(__dirname, '../dist'),
  compress: true,
  port: 5000,
  hot: true,
  writeToDisk: true,
  proxy,
}