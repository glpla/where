import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '桂林'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  window.console.log(e)
}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity(state, para) {
      state.city = para;
      try {
        localStorage.city = para
      } catch (e) {
        window.console.log(e)
      }
    }

  },
  actions: {

  }
})