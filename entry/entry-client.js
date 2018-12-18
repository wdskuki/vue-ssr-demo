/* entry-client.js */
import { createApp } from '../src/main'


const app = createApp()

// 绑定app根元素

app.$router.onReady(() => {
  app.$mount('#app')
})
// window.onload = function() {
//        app.$mount('#app')
// }
