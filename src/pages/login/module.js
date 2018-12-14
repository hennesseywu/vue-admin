import {
  requestLogin
} from './service';
import { Message } from 'element-ui';
import Router from '../../router'

const state = {
  userInfo:{}
}

const actions = {
   async loginAction({
    commit,
    state
  }, params) {
    console.log(params)
    let {data} =await requestLogin(params);
    console.log("return",data)
    if (data.code !== 200) {
      Message({
        message: msg,
        type: 'error'
      });
    } else {
      commit("SET_USER",data.user);
      sessionStorage.setItem('user', JSON.stringify(data.user));
      Router.push({
        path: '/table'
      });
    }
  }
}

const mutations = {
  SET_USER(state,params){
    state.user=params;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}