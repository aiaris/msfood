import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: sessionStorage.getItem("name"),
    useravatar: sessionStorage.getItem("avatar"),
    imgBase: "http://39.103.66.129:3001/",
  },
  getters: {},
  mutations: {
    updataUsername(state, userdata) {
      state.username = userdata.name
      state.useravatar = userdata.avatar
      sessionStorage.setItem("name", userdata.name)
      sessionStorage.setItem("avatar", userdata.avatar)
    },
  },
  actions: {},
  modules: {},
})
