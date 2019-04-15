import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import input from '@/components/Input'
import output from '@/components/Output'
import students from '@/components/Students'

//import Page2 from '@/components/pages/Page2'
//import Students from '@/components/pages/Students'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/Input',
      name: 'input',
      component: input
    },
    {
      path: '/output',
      name: 'output',
      component: output
    },
    {
      path: '/students',
      name: 'students',
      component: students
    }
  ]
})