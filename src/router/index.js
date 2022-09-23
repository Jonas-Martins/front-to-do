import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/MyLogin.vue'
import Home from '@/views/MyLayout.vue'

import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'home',
    path: '/',
    component: Home
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.name != "login" && !store.getters.hasToken) {
    try {
      await store.dispatch('ActionCheckToken')
      next({ name: to.name })
    } catch {
      next({ name: 'login' })
    }
  }
  else {
    next()
  }
})

export default router
