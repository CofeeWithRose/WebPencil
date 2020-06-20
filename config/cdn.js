// const fs = require('fs')
// const path = require('path')
// process.env.PWD
// console.log('pwd======>: ', process.env)
const { BUILD_ENV } = require('../script/const')
const cdnConfigs = [
  
    {
        libName: 'vconsole',
        devCDNPath: 'https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js',
        // productionCDNPath:'https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js',
        root: 'VConsole',
    },
    {
      libName: 'history',
      devCDNPath: 'https://unpkg.com/history/umd/history.production.min.js',
      productionCDNPath:'https://unpkg.com/history/umd/history.production.min.js',
      root: 'HistoryLibrary',
    },
    {
        libName: 'hammerjs',
        devCDNPath: 'https://cdn.bootcss.com/hammer.js/2.0.8/hammer.js',
        productionCDNPath:'https://cdn.bootcss.com/hammer.js/2.0.8/hammer.min.js',
        root: 'Hammer',
    },
    {
        libName: 'react',
        devCDNPath: 'https://cdn.bootcss.com/react/16.13.1/umd/react.development.js',
        productionCDNPath:'https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js',
        root: 'React',
    },
    {
        libName: 'react-router',
        devCDNPath: 'https://cdn.bootcss.com/react-router/5.1.2/react-router.js',
        productionCDNPath:'https://cdn.bootcss.com/react-router/5.1.2/react-router.min.js',
        root: 'ReactRouter',
    },
    {
        libName: 'react-dom',
        devCDNPath: 'https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.development.min.js',
        productionCDNPath:'https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.production.min.js',
        root: 'ReactDOM',
    },
    {
        libName: 'react-router-dom',
        devCDNPath: 'https://cdn.bootcss.com/react-router-dom/5.1.2/react-router-dom.min.js',
        productionCDNPath:'https://cdn.bootcss.com/react-router-dom/5.1.2/react-router-dom.min.js',
        root: 'ReactRouterDOM',
    },
    {
        libName: 'antd',
        devCDNPath: 'https://cdn.bootcss.com/antd/4.1.3/antd-with-locales.min.js',
        productionCDNPath:'https://cdn.bootcss.com/antd/4.1.3/antd-with-locales.min.js',
        root: 'antd',
    },
    {
      libName: 'dexie',
      devCDNPath: 'https://npmcdn.com/dexie@3.0.1/dist/dexie.min.js',
      productionCDNPath: 'https://npmcdn.com/dexie@3.0.1/dist/dexie.min.js',
      root: 'Dexie'
    }
    
]

exports.externals = () => {
  if(process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT){
    return []
  }
  return cdnConfigs.filter(({productionCDNPath}) => productionCDNPath)
  .reduce( (externals ,{libName, root}) => ({...externals, [libName]: root}), {} )
}

exports.scripts = () => {
  if(process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT){
    return []
  }
 return  cdnConfigs.map(({ devCDNPath, productionCDNPath }) => process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT? devCDNPath: productionCDNPath)
}

exports.css = () => {
  if(process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT){
    return []
  }
  return cdnConfigs.map(({ css }) => css).filter(_=>_)
}
