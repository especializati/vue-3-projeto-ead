import { createStore } from 'vuex'

import users from './modules/users'
import courses from './modules/courses'
import supports from './modules/supports'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    courses,
    supports,
  }
})
