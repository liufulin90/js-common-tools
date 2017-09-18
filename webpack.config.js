/**
 * Created by liufulin on 17-5-24.
 */
var package = require('./package.json')
const webpack = require('webpack');

module.exports = {
  entry:  __dirname + '/src/index.js',//已多次提及的唯一入口文件
  output: {
    path: __dirname + '/lib',//打包后的文件存放的地方
    filename: 'js-common-tools.' + package.version + '.js'//打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      }
    ],
  },
  plugins: [
    // new webpack.optimize.ModuleConcatenationPlugin(), // 模块串联，大幅减少包大小257k =》239k
    new webpack.optimize.UglifyJsPlugin({
      beautify: false, // 最紧凑的输出
      comments: false, // 删除所有的注释
      compress: {
        warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
        // support_ie8: false, // 还可以兼容ie浏览器
        drop_console: true,  // 删除所有的 `console` 语句
        collapse_vars: true, // 内嵌定义了但是只用到一次的变量
        reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
      },
    }),
  ],
}