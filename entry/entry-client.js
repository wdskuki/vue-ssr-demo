/* entry-client.js */
// const createApp = require('@/main')
import createApp from '@/main'
const app = createApp()

// 绑定app根元素

window.onload = function() {
  app.$mount('#app')
}
