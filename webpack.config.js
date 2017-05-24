/**
 * Created by liufulin on 17-5-24.
 */
var pack = require('./package.json')

module.exports = {
  entry:  __dirname + '/src/index.js',//已多次提及的唯一入口文件
  output: {
    path: __dirname + '/lib',//打包后的文件存放的地方
    filename: 'js-common-tools.' + pack.version + '.js'//打包后输出文件的文件名
  }
}