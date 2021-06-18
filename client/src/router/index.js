import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      
      
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue'),
        meta: {
          requiresGuest: true
        }
      }
     ]
  });
  
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters.isLoggedIn) {
        // Redirect to the Login Page
        next('/login');
      } else {
        next();
      }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
      if (store.getters.isLoggedIn) {
        // Redirect to the Login Page
        next('/profile');
      } else {
        next();
      }
    } else {
      next()
    }
  });
  
  export default router;