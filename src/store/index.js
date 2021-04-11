import Vue from 'vue'
import Vuex from 'vuex'

import thoughts from './thoughts'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    thoughts
  }
})
