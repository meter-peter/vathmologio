import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import store from './store'
import axios from 'axios';
import 'es6-promise/auto'




import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)




const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}


new Vue({
  router,
  store,
  axios,

  render: h => h(App),

}).$mount('#app')
