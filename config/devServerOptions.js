const proxy = require('./devProxy')
const {output} = require('./webpack.config')

module.exports = {
  compress: true,
  port: 80,
  hot: true,
  proxy,
  publicPath:'/WebPencil',
  writeToDisk: true,
}