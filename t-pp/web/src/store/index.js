import { createStore } from 'vuex'

const types = {
  SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
  SET_USER: 'SET_USER' // 用户信息
}
export default createStore({
  state: { // 需要维护的状态
    isAutnenticated: false,  // 是否认证
    user: {}   // 存储用户信息
  },
  mutations: {
    [types.SET_IS_AUTNENTIATED](state, isAutnenticated) {
      if (isAutnenticated)
        state.isAutnenticated = isAutnenticated
      else
        state.isAutnenticated = false
    },
    [types.SET_USER](state, user) {
      if (user)
        state.user = user
      else
        state.user = {}
    }
  },
  actions: {
    setIsAutnenticated: ({ commit }, isAutnenticated) => {
      commit(types.SET_IS_AUTNENTIATED, isAutnenticated)
    },
    setUser: ({ commit }, user) => {
      commit(types.SET_USER, user)
    },
    clearCurrentState: ({ commit }) => {
      commit(types.SET_IS_AUTNENTIATED, false)
      commit(types.SET_USER, null)
    }
  },
  modules: {
  },
  getters: {
    isAutnenticated: state => state.isAutnenticated,
    user: state => state.user
  }
})
