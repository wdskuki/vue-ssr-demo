/* entry-server.js */
import createApp from '@/main'
// const createApp = require('@/main')
export default context => {
  return new Promise((resolve, reject) => {
    const app = createApp()

    // 更改路由
    app.$router.push(context.url)

    const matchedComponents = app.$router.getMatchedComponents()
    if (!matchedComponents.length) { return reject({ code: 404 }) }
    resolve(app)
  })
}
