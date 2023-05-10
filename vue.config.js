const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  lintOnSave:false,  //关闭语法检查
  runtimeCompiler: true,
  assetsDir:"static",
  parallel: false,
  publicPath: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  devServer: {
    proxy: {
      '/': {  //   若请求的前缀不是这个'/api'，那请求就不会走代理服务器
        target: 'http://wuwangwo.space:8081/',  //这里写路径
        pathRewrite: { '^/api': '' }, //将所有含/api路径的，去掉/api转发给服务器
        ws: false,  //用于支持websocket
        changeOrigin: true   //用于控制请求头中的host值
      },
    },
    allowedHosts: [
        'http://wuwangwo.space:8080',
    ],
  },
})
