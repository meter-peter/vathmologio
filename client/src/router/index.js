import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [ {
      path: 'admin',
      name: 'admin',
      component: () => import('../views/Admin.vue'),
      meta: {
        requiresAuth: true
      }
    },

      
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
        meta: {
          requiresAuth: true
        }
      },   
      {
        path: '/teacherDashboard',
        name: 't-dashboard',
        component: () => import('../views/TeacherDashboard.vue'),
        meta: {
          requiresTeacher: true
        }
      },   
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue'),
        meta: {
          requiresGuest: true
        }
      },    
       {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta: {
          requiresGuest: true
        }
      },
      {
        path: '/Admin',
        name: 'Admin',
        component: () => import('../views/Admin.vue'),
        meta: {
          requiresAuth: true
        }
      }
      ,
      
     ]
  });
  
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters.isLoggedIn) {
        next('/login');
      } else {
        next();
      }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
      if (store.getters.isLoggedIn) {
        next('/profile');
      } else {
        next();
      }
    }
      else if(to.matched.some(record => record.meta.requiresTeacher)) {
        if (store.getters.isTeacher) {
          next();
        } else {
          next('/profile');
        }}
        else {
      next()
    }
  });
  
  export default router;