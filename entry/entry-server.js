/* entry-server.js */
import createApp from '@/main'
// const createApp = require('@/main')
export default context => {
  console.log('export default context')
  return new Promise((resolve, reject) => {
    console.log('entry server Promise')
    const app = createApp()

    // 更改路由
    app.$router.push(context.url)

    app.$router.onReady(() => {
      const matchedComponents = app.$router.getMatchedComponents()
      if (!matchedComponents.length) { return reject({ code: 404 }) }
      // resolve(app)
      Promise.all(matchedComponents.map(component => {
        if (component.serverRequest) {
          console.log('matchedComponents.serverRequest')
          return component.serverRequest(app.$store)
        }
      })).then(() => {
        context.state = app.$store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
