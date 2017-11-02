import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld.vue";
import Swiper from "../pages/index-swiper.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Swiper',
      component: Swiper
    }
  ]
})
