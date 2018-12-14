import {
  requestLogin
} from './service';//引入调用接口相关
import { Message } from 'element-ui';
import Router from '../../router'


const state = {
  user:{}
}

const actions = {
  /**
   * 
   * @param {*} JSON格式参数 
   * login动作接口
   */
   async loginAction({
    commit,
    state
  }, params) {
    let {data} =await requestLogin(params);
    if (data.code !== 200) {
      Message({
        message: msg,
        type: 'error'
      });
    } else {
      commit("SET_USER",data.user);//用状态管理赋值；
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