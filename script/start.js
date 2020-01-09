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
  
  // compiler.watch(watchOptions, (err, stats) => {
  //   if (err) {
  //     console.error(err.stack || err);
  //     if (err.details) {
  //       console.error(err.details);
  //     }
  //     return;
  //   }
  
  //   const info = stats.toJson();
  
  //   if (stats.hasErrors()) {
  //     console.error(info.errors);
  //   }
  
  //   if (stats.hasWarnings()) {
  //     console.warn(info.warnings);
  //   }
  //   console.log(' \n complete!')
  //   // Log result...
  //   // Done processing
  // })
}
start()