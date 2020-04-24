const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const antdThemeVars = require('./theme')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')
const mainifestConfig = require('./mainifest')
const defineds = require('./defines')
const { BUILD_ENV } = require('../script/const')
const cdnConfigs = require('./cdn')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  externals:{
    ...(cdnConfigs.reduce( (externals ,{libName, root}) => ({...externals, [libName]: root}), {} ))
  },
  output: {
    publicPath: process.env.PUBLIC_PATH,
    path: path.resolve(__dirname, '../docs'),
    chunkFilename: process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT?'[id]-[hash].js': '[id]-[contenthash].js',
    filename: process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT?'[name]-[hash].js': '[name]-[contenthash].js',
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}), 
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: "last 2 versions" } },
              ],
              "@babel/preset-typescript",
              "@babel/preset-react"
            ],
            plugins: [
              ['lodash'],
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              // ["import", {
              //   "libraryName": "antd",
              //   "libraryDirectory": "es",
              //   "style": true // `style: true` 会加载 less 文件
              // }],
              "react-hot-loader/babel"
            ]
          }
        }
      },
      {
        oneOf: [
          {
            test: /.*antd.*\.less$/,
            use: [
              {loader: MiniCssExtractPlugin.loader},
              {
                loader: 'css-loader', // translates CSS into CommonJS
              },
              {
                loader: 'less-loader', // compiles Less to CSS
                options:{
                  javascriptEnabled: true,
                  modifyVars: antdThemeVars,
                }
              },
            ],
          },
          {
            test: /\.less$/,
            exclude: [ require.resolve('antd') ],
            use: [
              {loader: MiniCssExtractPlugin.loader},
              {
                loader: 'css-loader', // translates CSS into CommonJS
                options: {
                  modules: {
                    mode: 'local',
                    localIdentName: '[local]_[hash:5]',
                    context: path.resolve(__dirname, 'src'),
                    hashPrefix: 'web-pencil',
                  },
                }
              },
              {
                loader: 'less-loader', // compiles Less to CSS
                options:{
                  javascriptEnabled: true,
                  modifyVars: antdThemeVars,
                }
              }
            ],
          },
        ]
      }
    ],
  },
  plugins: [
    
    new webpack.DefinePlugin(defineds),
    new webpack.ProgressPlugin(),

    new MiniCssExtractPlugin({
      filename: process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT?'[name]-[hash].css': '[name]-[contenthash].css',
      chunkFilename:  process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT?'[id]-[hash].css': '[id]-[contenthash].css',
    }),
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true
    }),
    
    new HtmlWebpackPlugin({ 
      template:  path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../src/assets/favicon.ico'),
      scripts: [
        ... cdnConfigs.map(({ devCDNPath, productionCDNPath }) => process.env.BUILD_ENV === BUILD_ENV.DEVELOPMENT? devCDNPath: productionCDNPath),
      ],
      css: [
        ...cdnConfigs.map(({ css }) => css).filter(_=>_),
      ]
    }),
    new WebpackPwaManifest(mainifestConfig),
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