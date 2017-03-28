// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'

// global use
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

import Home from './components/Home.vue'
import Investment from './components/Investment.vue'
import Account from './components/Account.vue'
import Login from './components/Login.vue'
import Strategy from './components/Strategy.vue'

const routes = [
  { path: '/',
    redirect: '/home'
  },
  { path: '/home',
    component: Home
  },
  { path: '/investment',
    component: Investment
  },
  { path: '/account',
    component: Account
  },
  {
    path: '/login/:id',
    name: 'login',
    component: Login
  },
  {
    path: 'strategy',
    name: 'strategy',
    component: Strategy
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
