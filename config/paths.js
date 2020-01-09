const path = require('path')
// const pwd = process.env.PWD
function solvePath(name){
  return path.resolve(__dirname, `../${name}`)
}
module.exports = {
  solvePath,
  SRC: solvePath('src')
}