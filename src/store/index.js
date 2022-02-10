import { createStore } from 'vuex'

import users from './modules/users'
import courses from './modules/courses'
import supports from './modules/supports'

export default createStore({
  state: {
    loading: false,
    loadingMessage: 'Carregando... aguarde!'
  },
  mutations: {
    CHANGE_LOADING (state, status, msg = 'Carregando... aguarde!') {
      state.loading = status
      state.loadingMessage = msg
    } 
  },
  actions: {
  },
  modules: {
    users,
    courses,
    supports,
  }
})
