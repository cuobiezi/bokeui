/*
 * @Author: Conroy 
 * @Date: 2019-05-18 10:14:02 
 * @Last Modified by: Conroy
 * @Last Modified time: 2019-05-18 14:33:00
 */

const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: {
    'boke-ui': './src/components/index.js'
  },
   output:{
    path: path.resolve(__dirname, '../package'),
    filename: '[name].min.js',
    publicPath: '/package/',
    library: 'bokeui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: ['.js', '.vue']
  }, 
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: 'vue-style-loader!css-loader',
          sass: 'vue-style-loader!css-loader!sass-loader'
        },
        postLoaders: {
          html: 'babel-loader'
        }
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'autoprefixer-loader'
      ]
    }, {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}