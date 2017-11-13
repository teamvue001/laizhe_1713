import Vue from 'vue'
import Router from 'vue-router'
import Comment from "../pages/comment/comment.vue";
import Home from "../pages/home/home.vue";

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Home',
          component: Home
      },
       {
          path: '/comment',
          name: 'Comment',
          component: Comment
      }
  ]
})
