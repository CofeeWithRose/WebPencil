const proxy = require('./devProxy')

module.exports = {
  compress: true,
  port: 80,
  hot: true,
  proxy,
  publicPath:'/WebPencil',
  // writeToDisk: true,
}