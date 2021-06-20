import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import { BootstrapVue } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
const token = localStorage.getItem("token");

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}




new Vue({
  router,
  store,
  axios,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
