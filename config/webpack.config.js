// const paths = require('./paths')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../../html/WebPencil'),
    chunkFilename: '[id]-[hash].js',
    filename: '[name]-[hash].js',
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
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
              javascriptEnabled: true
            }
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: [ path.resolve('../src') ],
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template:  path.resolve(__dirname, '../public/index.html')}),
    new webpack.ProgressPlugin(),
    new CopyPlugin([
      { from: 'src/assets', to: 'assets' },
    ]),
    // new ManifestPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      importWorkboxFrom: 'local',
      // importsDirectory: 'WebPencil',
    }),
    // new WorkboxPlugin.InjectManifest({
    //   // 这些选项帮助快速启用 ServiceWorkers
    //   // 不允许遗留任何“旧的” ServiceWorkers
    //   importWorkboxFrom: 'local',
    //   swSrc:'./src/sw/index.ts',
    //   swDest: 'web-pencil-ws.js',
    // }),
  ]
}