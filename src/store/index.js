import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '',
    userName: ''
  },
  mutations: {
    change(state, value){
      state.city = value;
    },
    showUserName(state, value){
      state.userName = value;
    }
  },
  actions: {
    change({commit}, value){
      commit('change', value);
    },
    showUserName({commit}, value){
      commit('showUserName', value);
    }
  },
  modules: {
  }
})
