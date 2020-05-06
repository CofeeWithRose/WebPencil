const { BUILD_ENV } = require('./const')
process.env.BUILD_ENV = process.env.BUILD_ENV || BUILD_ENV.PRODUCTION
process.env.PUBLIC_PATH = process.env.PUBLIC_PATH || './'

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const cdnConfigs = require('../config/cdn')


const webpack = require('webpack')
const {plugins, ...config} = require('../config/webpack.config')
const cfg = { 
    ...config,
    mode: 'production',
    plugins: [
        ...plugings,
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 1000*1000*4,
            additionalManifestEntries: cdnConfigs.map(({productionCDNPath,devCDNPath})=> (
              {
                url: process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT? devCDNPath: productionCDNPath,
                revision: null,
              })
            ),
        }),
    ]
}
cfg.plugins.unshift(new CleanWebpackPlugin())
function build(){
    const compiler = webpack(cfg)
    compiler.run((err, stat) => {
        console.log(err)
    })
}
build()