module.exports = {
  devServer: {
    proxy: { // 配置跨域
      '/v1': {
        //要访问的跨域的api的域名
        target: 'http://localhost:3000/v1/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/v1': ''
        }
      }
    }
  }
}