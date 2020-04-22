const webpack = require('webpack')
const config = require('../config/webpack.config')
const childProcess = require('child_process')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const cfg = { ...config,  mode: 'production' }
cfg.plugins = [ ...cfg.plugins, new BundleAnalyzerPlugin({
    analyzerPort: 5001
}) ]
function build(){
    const compiler = webpack(cfg)
    compiler.run((err, stat) => {
        console.log(err)
    })
}
build()

// https://cdn.bootcss.com/react-dom/16.13.1/cjs/react-dom-server.browser.production.min.js
{/* <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> */}