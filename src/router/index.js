import Vue from 'vue'
import Router from 'vue-router'


import WeekendList from '../pages/weekendList/weekendList.vue'
import Details from '../pages/details/details.vue';
import PictureSwiper from '../pages/pictureSwiper/pictureSwiper.vue';

import Home from "../pages/home/home.vue";
import Palace from "../pages/list/imperialPalace/imperialPalace.vue"


Vue.use(Router)
export default new Router({
  routes: [
		{
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
    },{
      path: '/',
      name: 'Home',
      component: Home
  	},{
      path: '/palace',
      name: 'Palace',
      component: Palace
  	}
  ]
})
