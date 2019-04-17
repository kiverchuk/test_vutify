import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    x : 0,
    y : 0,
    students : []
  },
  mutations: {   
    setX (state, x) {
        state.x = x
    },
    setY (state, y) {       
        state.y = y
    },
    setStud(state, stud){
      state.students = stud
    }
  },
  getters: {
    getX (state) {
      return state.x
    },
    getY (state) {
        return state.y
    },
   getStud(state){
     return state.students
   }
  },
  actions: {
    fetchData (context) {
      fetch('http://localhost:3005/students')
        .then(response => {
          return response.json()
        })
        .then(data => {
          //console.log(data)
          context.commit('setStud', data)
        })
    }
  }
})

export default store