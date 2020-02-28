import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Users from '@/components/Users'
import Actions from '@/components/Actions'
import Login from '@/components/Login'

Vue.use(Router)



export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter(to, from, next) {
          console.log('beforeneter home'+to+from+next);
          const loggedIn = localStorage.getItem('user');
          if (!loggedIn) {
            next()
          } else {
            next({
              name: "Login" // back to safety route //
            });
          }
      }
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
      beforeEnter(to, from, next) {
          console.log('beforeneter home'+to+from+next);
          const loggedIn = localStorage.getItem('user');
          if (!loggedIn) {
            next()
          } else {
            next({
              name: "Login" // back to safety route //
            });
          }
      }
    },
    {
      path: '/actions',
      name: 'Actions',
      component: Actions,
      beforeEnter(to, from, next) {
          console.log('beforeneter home'+to+from+next);
          const loggedIn = localStorage.getItem('user');
          if (!loggedIn) {
            next()
          } else {
            next({
              name: "Login" // back to safety route //
            });
          }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter(to, from, next) {
          console.log('beforeneter home'+to+from+next);
          const loggedIn = localStorage.getItem('user');
          if (!loggedIn) {
            next()
          } else {
            next({
              name: "Home" // back to safety route //
            });
          }
      }
    }
  ]
})


