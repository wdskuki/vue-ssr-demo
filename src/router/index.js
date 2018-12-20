/* route.js */
import Vue from 'vue'
import VueRouter from 'vue-router'

const home = r => require.ensure([], () => r(require('@/modules/home')), 'home')
const animal = r => require.ensure([], () => r(require('@/modules/animal')), 'animal')
const people = r => require.ensure([], () => r(require('@/modules/people')), 'people')

// const home = () => import('@/modules/home')
// const animal = () => import('@/modules/animal')
// const people = () => import('@/modules/people')

Vue.use(VueRouter)

export default function createRouter() {
  let router = new VueRouter({
    // 要记得增加mode属性，因为#后面的内容不会发送至服务器，服务器不知道请求的是哪一个路由
    mode: 'history',
    routes: [
      {
        alias: '/',
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/animal',
        name: 'animal',
        component: animal
      },
      {
        path: '/people',
        name: 'people',
        component: people
      }
    ]
  })

  return router
}
