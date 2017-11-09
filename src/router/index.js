import Vue from 'vue'
import Router from 'vue-router'

import Home from "../pages/home/home"
import Login from "@/pages/login/login"
import Ad from "../pages/promotion/ad"

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Home',
          component: Home
      },
      {
          path: '/login',
          name: 'login',
          component: Login,
      },
      {
          path: '/ad',
          name: 'ad',
          component: Ad,
      }
  ]
})
