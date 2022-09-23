import Vue from 'vue'
import Vuex from 'vuex'
import $http from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: ''
  },
  getters: {
    hasToken({ token }) {
      return !!token
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    ActionLogin({ dispatch }, payload) { // dispatch puxa outra action
      return $http.post("user/auth", payload)
        .then((r) => {
          dispatch('ActionSetUser', r.data.user)
          dispatch('ActionSetToken', r.data.token)
        })
    },
    ActionSetUser({ commit }, payload) {
      commit('setUser', payload)
    },
    ActionSetToken({ commit }, payload) {
      $http.defaults.headers.common['Authorization'] = `Bearer ${payload}`
      localStorage.setItem('token', payload)
      commit('setToken', payload)
    },

    ActionCheckToken({ dispatch, state }) {
      if (!state.token) {
        const token = localStorage.getItem('token');
        dispatch('ActionSetToken', token);
        return dispatch('ActionLoadSession')
      }
    },
    ActionLoadSession({ dispatch }) {
      $http.get("load-session")
      .then((r) => {
        dispatch('ActionSetUser', r.data)
      })
      .catch(() => {
        dispatch('ActionSignOut')
      })
    },
    ActionSignOut({commit}){
      commit('setUser', null)
      commit('setToken', null)
    }
  },
  modules: {
  }
})
