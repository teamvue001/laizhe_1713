import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home/home.vue";
import Touch from "../pages/home/components/header/touch/touch.vue"

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Home',
          component: Home
      },{
          path: '/touch',
          name: 'touch',
          component: Touch
      }
  ]
})
