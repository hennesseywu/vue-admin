import Vue from 'vue'
import App from './App.vue'
import './common/element.js'//element引入
import store from './store'
import router from './router'

import Mock from './mock'
Mock.bootstrap();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')