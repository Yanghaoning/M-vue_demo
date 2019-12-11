const path = require('path')

/* 根据指定目录名得到根目录的绝对路径 */
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: false,  // 关闭eslint
  productionSourceMap: true,  // 生产环境下css 分离文件
  devServer: {   // 配置服务器
    port: 8080,
    open: true,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  /* webpack支持的配置 */
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'components': resolve('src/components'),
        'views': resolve('src/views'),
      }
    },
    externals: {
      'AMap': 'AMap' // 高德地图配置
    }
  },
}


