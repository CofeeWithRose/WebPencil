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
  setInterval(() => {
    const childProcess = require('child_process')
    
    childProcess.exec('git pull', (_, log) => {
      console.log(`git pull : ${process.env.PWD}.\n`, log)
    })
  },3600 * 24)
}
start()