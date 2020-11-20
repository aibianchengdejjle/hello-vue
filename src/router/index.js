import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import Login from '../views/Login'
import List from '../views/user/List'
import Profiles from '../views/user/Profiles'
import NotFound from '../views/NotFoumd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main/:name',
      component: Main,
      props: true,
      children: [
        {path: '/user/profile/:id', component: Profiles, props: true, name: 'UserProfiles'},
        {path: '/user/list', component: List}
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/redirect',
      component: Main
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
