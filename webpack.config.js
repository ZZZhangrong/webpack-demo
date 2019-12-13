const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 每次编译的时候将build 出来的目录删除，重新生成
module.exports = {
  mode: "development",  // 'production'
  // 本节我希望用到的css 能够进行依赖解析，所以我希望能看到动态的css 效果，所以这里我启用了devServer
  devServer: {
    contentBase: path.join(__dirname, "bundle"),
    open: true, // 自动打开默认浏览器
    port: 3000 // 默认端口就是8080
  },
  entry: {    // 默认值为./src， entry: string|Array<string> 可以是多个入口'
    'main': './src/index.js', // 输出的文件名是main.js
    'payme': './src/pay.js'
  },
  output: {   // 默认生成在dist目录
    // 在output 的filename中hash 和chunkhash 不能同时使用，js 文件变化时，chunkhash会变，html +js 变化时，hash 会变
    filename: '[name].[hash:3].bundle.js', // 用于输出文件的文件名，[name]是入口名称,[id]是内部 chunk id，[hash]是模块标识符(module identifier)的 hash，[chunkhash]是chunk 内容的 hash
    path: path.resolve(__dirname, 'bundle')  // 目标输出目录 path 的绝对路径

  },
  // loader解析是从下向上，从右向左解析，类似于栈
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: "style-loader"
        use: [  // String || Array
          {
            loader: "style-loader",
            options: {

            }
          },
          {
            loader: "css-loader",
            options: {

            }
          },
          // postcss-loader是为了解析高版本的css语法，例如flex在低版本浏览器不兼容，使用postcss-loader可在flex前加上 webkit- 等，
          // 需配合autoprefixer插件和postcss-loader.config.js使用配置使用
          {
            loader: "postcss-loader",
            options: {

            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
            options: {

            }
          },
          {
            loader: "css-loader",
            options: {

            }
          },
          // postcss-loader是为了解析高版本的css语法，例如flex在低版本浏览器不兼容，使用postcss-loader可在flex前加上 webkit- 等，
          // 需配合autoprefixer插件和postcss-loader.config.js使用配置使用
          {
            loader: "postcss-loader",
            options: {

            }
          },
          {
            loader: "less-loader",
            options: {

            }
          }
        ]
      }
    ]

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
    }),
    new CleanWebpackPlugin()
  ],
  devtool: false,

  /*optimization: {

  },*/  // 线上环境才能有次优化

}