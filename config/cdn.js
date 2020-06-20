// const fs = require('fs')
// const path = require('path')
// process.env.PWD
// console.log('pwd======>: ', process.env)
const { BUILD_ENV } = require('../script/const')
const cdnConfigs = [
  
    {
        libName: 'vconsole',
        devCDNPath: 'https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js',
        productionCDNPath:'https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js',
        root: 'VConsole',
    },
    {
        libName: 'hammerjs',
        devCDNPath: 'https://cdn.bootcss.com/hammer.js/2.0.8/hammer.js',
        productionCDNPath:'https://cdn.bootcss.com/hammer.js/2.0.8/hammer.min.js',
        root: 'Hammer',
    },
    {
        libName: 'react',
        devCDNPath: 'https://unpkg.com/react@16/umd/react.development.js',
        productionCDNPath:'https://unpkg.com/react@16/umd/react.production.min.js',
        root: 'React',
    },
    {
        libName: 'react-dom',
        devCDNPath: 'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
        productionCDNPath:'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
        root: 'ReactDOM',
    },
    {
        libName: 'react-router-dom',
        devCDNPath: 'https://unpkg.com/react-router-dom@5.1.2/umd/react-router-dom.min.js',
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
  const cfgs = cdnConfigs.filter(({productionCDNPath}) => productionCDNPath)
  if(process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT){
    return []
  }
  return cfgs.reduce( (externals ,{libName, root}) => ({...externals, [libName]: root}), {} )
}

exports.scripts = () => {
  if(process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT){
    return []
  }
 return  cdnConfigs.map(({ devCDNPath, productionCDNPath }) => process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT? devCDNPath: productionCDNPath)
 .filter(val => val)
}

exports.css = () => {
  if(process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT){
    return []
  }
  return cdnConfigs.map(({ css }) => css).filter(_=>_)
}
