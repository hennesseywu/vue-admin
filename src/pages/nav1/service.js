//获取用户列表
export  function getUserListPage(params) {
  return  $http.get(`/user/listpage`, {params:params});
}

//获取用户列表
export  function getUserList(params) {
  return  $http.get(`/user/list`, {params:params});
}

//删除用户
export  function removeUser(params) {
  return  $http.get(`/user/remove`, {params:params});
}

//批量删除用户
export  function batchRemoveUser(params) {
  return  $http.get(`/user/batchremove`, {params:params});
}

//修改用户
export  function editUser(params) {
  return  $http.get(`/user/edit`, {params:params});
}

//增加用户
export  function addUser(params) {
  return  $http.get(`/user/add`, {params:params});
}
