import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    x : 2,
    y : 3
  },
  mutations: {   
    setX (state, x) {
      console.log("set x" + x)
        state.x = x
    },
    setY (state, y) {       
        state.y = y
    }
  },
  getters: {
    getX (state) {
      console.log("get x")
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