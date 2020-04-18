const webpack = require('webpack')
const config = require('../config/webpack.config')
const childProcess = require('child_process')
const cfg = { ...config,  mode: 'production' }
function build(){
    const compiler = webpack(cfg)
    compiler.run((err, stat) => {
        console.log(err)
    })
}
build()