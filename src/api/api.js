
let base = '';

export const requestLogin = params => { return Axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return Axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return Axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return Axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return Axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return Axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return Axios.get(`${base}/user/add`, { params: params }); };