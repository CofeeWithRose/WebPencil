const webpack = require('webpack')
const config = require('../config/webpack.config')
const childProcess = require('child_process')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const cfg = { ...config,  mode: 'production' }
cfg.plugins = [ ...cfg.plugins, new BundleAnalyzerPlugin({
    analyzerPort: 5001
}) ]
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