import {
  getUserListPage,
  removeUser,
  getUserList,
  batchRemoveUser,
  editUser,
  addUser
} from './service'; //引入调用接口相关
import {
  Message
} from 'element-ui';


const state = {
  userList: null
}

const actions = {
  //用户分页数据
  async userListPageAction({
    commit,
    state
  }, params) {
    let {
      data
    } = await getUserListPage(params);
    if (data.code !== 200) {
      Message({
        message: data.msg,
        type: 'error'
      });
    } else {
      commit("SET_USER_LIST", data.users); //用状态管理赋值；
    }
  },
    //用户分页数据
    async userListAction({
      commit,
      state
    }, params) {
      let {
        data
      } = await getUserList(params);
      if (data.code !== 200) {
        Message({
          message: data.msg,
          type: 'error'
        });
      } else {
        commit("SET_USER_LIST", data.users); //用状态管理赋值；
      }
    },
  
  //删除用户
  async removeUserAction({
    commit,
    state
  }, params) {
    let {
      data
    } = await removeUser(params);
    if (data.code !== 200) {
      Message({
        message: data.msg,
        type: 'error'
      });
    } else {
      commit("SET_USER_LIST", data.users); //用状态管理赋值；
    }
  },
  //编辑用户
  async editUserAction({
    commit,
    state
  }, params) {
    let {
      data
    } = await editUser(params);
    if (data.code !== 200) {
      Message({
        message: data.msg,
        type: 'error'
      });
    } else {
      commit("SET_USER_LIST", data.users); //用状态管理赋值；
    }
  },
  //批量删除用户
  async batchRemoveUserAction({
    commit,
    state
  }, params) {
    let {
      data
    } = await batchRemoveUser(params);
    if (data.code !== 200) {
      Message({
        message: data.msg,
        type: 'error'
      });
    } else {
      commit("SET_USER_LIST", data.users); //用状态管理赋值；
    }
  },
  //批量删除用户
  async addUserAction({
    commit,
    state
  }, params) {
    let {
      data
    } = await addUser(params);
    if (data.code !== 200) {
      Message({
        message: data.msg,
        type: 'error'
      });
    } else {
      commit("SET_USER_LIST", data.users); //用状态管理赋值；
    }
  },

}

const mutations = {
  SET_USER_LIST(state, params) {
    state.userList = params;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}