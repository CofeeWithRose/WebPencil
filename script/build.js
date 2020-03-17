const webpack = require('webpack')
const config = require('../config/webpack.config')
const childProcess = require('child_process')
const cfg = { ...config,  mode: 'production' }
function build(){
    try{
        childProcess.execSync(`rm -rf ${config.output.path}`)
    }catch(e){
        console.warn('fail remve dist dir.')
    }
    const compiler = webpack(cfg)
    compiler.run((err, stat) => {
        console.log(err)
    })
}
build()