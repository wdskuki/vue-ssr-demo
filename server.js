/* server.js */
// const createApp = require('./src/main')
// import createApp from './src/main'
const exp = require('express')
const path = require('path')
const express = exp()
// const renderer = require('vue-server-renderer').createRenderer()
// const createApp = require('./dist/server/bundle.server.js')['default']

// const createApp = require('./dist/server/vue-ssr-server-bundle.json')

const { createBundleRenderer } = require('vue-server-renderer')
const bundle = require('./dist/server/vue-ssr-server-bundle.json')
const renderer = createBundleRenderer(bundle) // can also directly pass the absolute path string.

// 设置静态文件目录
express.use('/', exp.static(path.join(__dirname, '/dist/server')))

const clientBundleFileUrl = '/client/bundle.client.js'

// 响应路由请求
express.get('*', (req, res) => {
  const context = { url: req.url }

  // 创建vue实例，传入请求路由信息
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.error(err)
      return res.state(500).end('运行时错误')
    }
    res.send(`
    <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Vue2.0 SSR渲染页面</title>
                        <script src="${clientBundleFileUrl}"></script>
                    </head>
                    <body>
                        <div id="app">${html}</div>
                    </body>
                </html>
            `)
  })
})

// 服务器监听地址
express.listen(8080, () => {
  console.log('服务器已启动！')
})
