import {
  RECORD_USERINFO,
  OUT_LOGIN,
  INIT_USERINFO
} from "./mutation-types"

import { setStore, getStore, removeStore } from "../common/common"

export default {
  // 记录登录信息
  [RECORD_USERINFO](state, data) {
    setStore('token', data.token);
    setStore('user', data.user);
    state.userInfo = data.user;
    state.token = data.token
    state.login = true;
  },
  // 退出登录
  [OUT_LOGIN](state) {
    removeStore('token');
    removeStore('user');
    state.userInfo = null;
    state.login = false;
  },
  // 页面刷新从本地缓存获取用户信息
  [INIT_USERINFO](state) {
    let initUserinfo = getStore('user');
    if (initUserinfo) {
      state.userInfo = JSON.parse(initUserinfo);
      state.login = true;
    }
  }
}