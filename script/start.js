const { BUILD_ENV } = require('./const')
process.env.BUILD_ENV = process.env.BUILD_ENV || BUILD_ENV.DEVELOPMENT
process.env.PUBLIC_PATH = process.env.PUBLIC_PATH || './'
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server');
const open = require('opn')

const devPlugins = [
  new webpack.HotModuleReplacementPlugin()
]

function start(){
  const cfg = require('../config/webpack.config')
  const webpackConfig = {
    ...cfg,
    devtool: 'eval-source-map',
    plugins: [...cfg.plugins, ...devPlugins],
  }
  const devServerOptions = require('../config/devServerOptions')
  const compiler =  webpack({
    ...webpackConfig, 
    mode: 'development'
  })
  webpackDevServer.addDevServerEntrypoints(webpackConfig, devServerOptions);
  const server = new webpackDevServer(compiler, devServerOptions);
  server.listen(80);
  console.log('dev server listening on port 80, http://localhost/WebPencil/');
  open('http://localhost/WebPencil/')
}
start()