/* entry-server.js */
import { createApp } from '../src/main'

export default context => {
    return new Promise((resolve, reject) => {
        const app = createApp()

        // 更改路由
        app.$router.push(context.url)

        app.$router.onReady(() => {
          const matchedComponents = app.$router.getMatchedComponents()
          if (!matchedComponents.length) { return reject({ code: 404 }) }
          resolve(app)
        }, reject)
    })
}
