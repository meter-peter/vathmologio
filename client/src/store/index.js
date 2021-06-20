import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/Auth'
import Lessons from './modules/Lessons'
import Admin from './modules/Admin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
   Auth,
   Lessons,
   Admin
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})