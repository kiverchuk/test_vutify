import Vue from 'vue'
import App from './App.vue'
//import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import store from '../store'
import VueRouter from 'vue-router'
import router from './router'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuetify)
//Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
