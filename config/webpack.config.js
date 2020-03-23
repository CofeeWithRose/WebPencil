// const paths = require('./paths')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const antdThemeVars = require('./theme')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: '[id]-[hash].js',
    filename: '[name]-[hash].js',
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}), 
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        // exclude: /node_modules/,
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
              ["import", {
                "libraryName": "antd",
                "libraryDirectory": "es",
                "style": true // `style: true` 会加载 less 文件
              }],
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
              // {
              //   loader: 'style-loader', // creates style nodes from JS strings
              // },
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
              // {
              //   loader: 'style-loader', // creates style nodes from JS strings
              // },
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
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
      chunkFilename: '[id]-[contenthash].css',
    }),
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true
    }),
    new HtmlWebpackPlugin({ template:  path.resolve(__dirname, '../public/index.html')}),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    // new CopyPlugin([
    //   { from: 'src/assets', to: 'assets' },
    // ]),
    // new ManifestPlugin(),
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   importWorkboxFrom: 'local',
    //   // importsDirectory: 'WebPencil',
    // }),


    // new WorkboxPlugin.InjectManifest({
    //   // 这些选项帮助快速启用 ServiceWorkers
    //   // 不允许遗留任何“旧的” ServiceWorkers
    //   importWorkboxFrom: 'local',
    //   swSrc:'./src/sw/index.ts',
    //   swDest: 'web-pencil-ws.js',
    // }),
  ]
}