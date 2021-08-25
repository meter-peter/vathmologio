import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: "/student",
        name: "student",
        component: () => import('../views/Profile.vue')
      } ,
       {
        path: "/assessment",
        name: "assessment",
        component: () => import('../views/GradesByTeacher.vue')
      } ,
      {
        path: "/lesson/:id",
        name: "lesson-details",
        component: () => import('../views/LessonDetails.vue')
      } ,
      {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/Admin.vue'),
      meta: {
        requiresAuth: true
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
        path: '/lesson/:id',
        name: 'lesson-details',
        component: () => import('../views/LessonDetails.vue'),
        meta: {
          requiresGuest: false
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
        path: '/browse',
        name: 'browse',
        component: () => import('../views/Browse.vue'),
        meta: {
        
        }
        
      },{
       path: '/teacher-Dashboard',
        name: 'teacher-Dashboard',
        component: () => import('../views/TeacherDashboard.vue'),

     
      
       }
      ]
    }
  );
  
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
          next('/teacher-Dashboard');
        }}
        else {
      next()
    }
  });
  
  export default router;