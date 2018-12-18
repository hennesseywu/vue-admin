import Vue from 'vue'
import App from './App.vue'
import './common/element.js'//element引入
import store from './store'
import router from './router'
import axios from './common/axio';
import Mock from './mock'
import 'font-awesome/css/font-awesome.min.css'
window.$http = axios
console.log("process.env",process.env)
if( process.env.NODE_ENV=="development"){
  Mock.bootstrap();
}


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')