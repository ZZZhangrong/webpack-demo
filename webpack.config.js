const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {    // 默认值为./src， entry: string|Array<string> 可以是多个入口'
    'main': './src/index.js', // 输出的文件名是main.js
    'payme': './src/pay.js'
  },
  output: {   // 默认生成在dist目录
    // 在output 的filename中hash 和chunkhash 不能同时使用，js 文件变化时，chunkhash会变，html +js 变化时，hash 会变
    filename: '[name].[hash:3].bundle.js', // 用于输出文件的文件名，[name]是入口名称,[id]是内部 chunk id，[hash]是模块标识符(module identifier)的 hash，[chunkhash]是chunk 内容的 hash
    path: path.resolve(__dirname, 'bundle')  // 目标输出目录 path 的绝对路径

  },

  module: {

  },
  plugins: [
    new HtmlWebpackPlugin({  // 默认路径./src/index.html,可省略,inject 插入
        title: 'test', // 默认title Webpack App
        template: './src/index.html',
        //filename: './src/index.html',  // 默认'index.html'， The file to write the HTML to. Defaults to index.html
        // inject true or 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element
        inject: 'head', // Boolean|String，true || 'head' || 'body' || false，默认true
        hash: true, // Boolean，默认false .js?hash
        chunks: ['main']  // 默认引入所有js文件，chunks指定引入哪一些js文件
        // minify // 压缩，Boolean|Object ，true if mode is 'production', otherwise false
    })
  ],
  devtool: false,
  devServer: {

  },
  /*optimization: {

  },*/  // 线上环境才能有次优化
  mode: "development", // 'production'

}