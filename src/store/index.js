import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  userInfo: null, // 用户信息
  login: false, // 是否登录
  token: '' // token
}

export default new Vuex.Store({
  state,
  mutations
})