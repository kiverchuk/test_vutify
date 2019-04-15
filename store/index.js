import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    x : 0,
    y : 0
  },
  mutations: {   
    setX (state, x) {
        state.x = x
    },
    setY (state, y) {       
        state.y = y
    }
  },
  getters: {
    getX (state) {
      return state.x
    },
    getY (state) {
        return state.y
    }
   
  },
  actions: {
    fetchData (context) {
      fetch('http://localhost:3004/data')
        .then(response => {
          return response.json()
        })
        .then(data => {
          //data work
        })
    }
  }
})

export default store