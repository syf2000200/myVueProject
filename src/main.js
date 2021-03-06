// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Axios from 'axios'
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// import 'muse-ui/dist/theme-teal.css' // 使用 light 主题
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'

// global use
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$http = Axios
// Vue.use(MuseUI)
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)

// template.vue import
import Home from './components/Home.vue'
import Investment from './components/Investment.vue'
import Account from './components/Account.vue'
import More from './components/More.vue'
import Login from './components/Login.vue'
import Strategy from './components/Strategy.vue'
import Person from './components/Person.vue'

// router config
const routes = [
  { path: '/',
    redirect: '/home'
  },
  { path: '/home',
    name: 'home',
    component: Home
  },
  { path: '/investment',
    name: 'investment',
    component: Investment
  },
  { path: '/account',
    name: 'account',
    component: Account
  },
  { path: '/account/person',
    name: 'personInfo',
    component: Person
  },
  {
    path: '/more',
    name: 'more',
    component: More
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/strategy',
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
