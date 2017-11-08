import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/home.vue';
import WeekendList from '../pages/weekendList/weekendList.vue'
import Details from '../pages/details/details.vue';
import PictureSwiper from '../pages/pictureSwiper/pictureSwiper.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/weekendList',
      name: 'WeekendList',
      component: WeekendList
    },{
      path: '/details',
      name: 'Details',
      component: Details
    },{
      path: '/pictureSwiper',
      name: 'PictureSwiper',
      component: PictureSwiper
    }
  ]
})
