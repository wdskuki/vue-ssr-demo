/* main.js */
import Vue from 'vue'
import createRouter from './router'
import App from './App.vue'
import createStore from './store'
import { sync } from 'vuex-router-sync'
// 导出一个工厂函数，用于创建新的vue实例
export default function createApp() {
  const router = createRouter()
  const store = createStore()

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return app
}
