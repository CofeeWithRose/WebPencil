const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server');

function start(){
  const webpackConfig = require('../config/webpack.config')
  const devServerOptions = require('../config/devServerOptions')
  const compiler =  webpack(webpackConfig)
  webpackDevServer.addDevServerEntrypoints(webpackConfig, devServerOptions);
  const server = new webpackDevServer(compiler, devServerOptions);
  server.listen(5000, () => {
    console.log('dev server listening on port 5000');
  });
  
}
start()