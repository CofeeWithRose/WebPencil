const fs = require('fs')
const path = require('path')

module.exports = {
  compress: true,
  port: 5000,
  hot: true,
  writeToDisk: true,
  https: {
    key: fs.readFileSync(path.resolve(__dirname, './cer/server_no_passwd.key')),
    cert: fs.readFileSync(path.resolve(__dirname, './cer/server.crt')),
    ca: fs.readFileSync(path.resolve(__dirname, './cer/server.csr')),
  }
}