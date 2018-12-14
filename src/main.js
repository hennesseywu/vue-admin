import Vue from 'vue'
import App from './App.vue'
import './common/element.js'//element引入
import store from './store'
import router from './router'
import axios from './common/axio';
window.Axios=axios;
import Mock from './mock'
import ENV from './config/init'

Mock.bootstrap();

window.ENV=ENV;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')