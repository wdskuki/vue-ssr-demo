/* entry-client.js */
// const createApp = require('@/main')
import createApp from '@/main'
const app = createApp()

// 同步服务端信息
if (window.__INITIAL_STATE__) {
  app.$store.replaceState(window.__INITIAL_STATE__)
}

// 绑定app根元素
app.$router.onReady(() => {
  app.$mount('#app')
})
