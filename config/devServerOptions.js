const proxy = require('./devProxy')

module.exports = {
  compress: true,
  port: 5000,
  hot: true,
  proxy,
}