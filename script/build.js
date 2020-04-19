const { BUILD_ENV } = require('./const')
process.env.BUILD_ENV = process.env.BUILD_ENV || BUILD_ENV.PRODUCTION

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpack = require('webpack')
const config = require('../config/webpack.config')
const cfg = { ...config,  mode: 'production' }
cfg.plugins.unshift(new CleanWebpackPlugin())
function build(){
    const compiler = webpack(cfg)
    compiler.run((err, stat) => {
        console.log(err)
    })
}
build()