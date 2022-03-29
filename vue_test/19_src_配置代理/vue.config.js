const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 代理服务器
  // 端口号是目标端口
  // 代理服务器不会每次都帮你向目标服务器请求，当他能够在当前域中找到资源就不转发请求
  // 缺点：
  // 1、不能配置多个代理
  // 2、不能灵活控制走不走代理
  // 方式一:
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 方式二:
  devServer: {
    proxy: {
      // 代理一
      '/api': { // 请求前缀:用于灵活控制是否走代理,走代理即加上
        target: 'http://localhost:5000', // 目标服务器
        // 清除请求前缀
        pathRewrite:{'^/api':''},
        ws: true, // 用于支持websocket
        changeOrigin: true // 用于控制请求头中的host值
      },
      // 代理二
      '/foo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/foo':''},
      }
    }
  }
})
