const { BUILD_ENV } = require('./const')
process.env.BUILD_ENV = process.env.BUILD_ENV || BUILD_ENV.PRODUCTION
process.env.NODE_ENV = BUILD_ENV.PRODUCTION
process.env.PUBLIC_PATH = process.env.PUBLIC_PATH || './'

const webpack = require('webpack')
const config = require('../config/webpack.config')
const childProcess = require('child_process')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const cfg = { 
  ...config,  
  mode: 'production', 
  output: {
    publicPath: process.env.PUBLIC_PATH,
    path: path.resolve(__dirname, '../analyze'),
    chunkFilename: process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT?'[id]-[hash].js': '[id]-[contenthash].js',
    filename: process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT?'[name]-[hash].js': '[name]-[contenthash].js',
  },
}
cfg.plugins = [ ...cfg.plugins, new BundleAnalyzerPlugin({
    analyzerPort: 5001
})]
function build(){
    const compiler = webpack(cfg)
    compiler.run((err, stat) => {
        console.log(err)
    })
}
build()

// https://cdn.bootcss.com/react-dom/16.13.1/cjs/react-dom-server.browser.production.min.js
{/* <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> */}