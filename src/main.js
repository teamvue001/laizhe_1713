import Vue from 'vue';
import router from './router';
import App from './App.vue';
import FastClick from 'fastclick';

FastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
