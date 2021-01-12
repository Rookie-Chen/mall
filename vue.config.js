const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => { // 链式操作修改原始webpack配置
    config
      .resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('@/assets'))
      .set('components', resolve('@/components'))
      .set('views', resolve('@/views'))
      .set('network',resolve('@/network'))
  }
}