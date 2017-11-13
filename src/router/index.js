import Vue from 'vue'
import Router from 'vue-router'

<<<<<<< HEAD
import Home from '../pages/home/home.vue';
import WeekendList from '../pages/weekendList/weekendList.vue'
import Details from '../pages/details/details.vue';
import PictureSwiper from '../pages/pictureSwiper/pictureSwiper.vue';
=======
import Home from "../pages/home/home.vue";
import Palace from "../pages/list/imperialPalace/imperialPalace.vue"
>>>>>>> master

Vue.use(Router)
export default new Router({
  routes: [
<<<<<<< HEAD
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
=======
      {
          path: '/',
          name: 'Home',
          component: Home
      },
      {
          path: '/palace',
          name: 'Palace',
          component: Palace
      }
>>>>>>> master
  ]
})
