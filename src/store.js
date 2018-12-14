import Vue from 'vue'
import Vuex from 'vuex'

import login from "./pages/login/module"

Vue.use(Vuex)

export default new Vuex.Store({

  //全局state
  state: {

  },
  //全局mutations
  mutations: {

  },
  //全局actions
  actions: {

  },
  //子vuex
  modules: {
    login
  }
})