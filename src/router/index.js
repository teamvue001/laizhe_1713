import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld.vue";
import Swiper from "../pages/banner/index-swiper.vue";
import Home from "../pages/home.vue";

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Home',
          component: Home
      }
  ]
})
