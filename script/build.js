const { BUILD_ENV } = require('./const')
process.env.BUILD_ENV = process.env.BUILD_ENV || BUILD_ENV.PRODUCTION
process.env.NODE_ENV = BUILD_ENV.PRODUCTION
process.env.PUBLIC_PATH = process.env.PUBLIC_PATH || './'

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const { scripts } = require('../config/cdn')


const webpack = require('webpack')
const {plugins, ...config} = require('../config/webpack.config')
const cfg = { 
    ...config,
    mode: 'production',
    plugins: [
        ...plugins,
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 1000*1000*4,
            additionalManifestEntries: scripts().map((url)=> (
              {
                url,
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