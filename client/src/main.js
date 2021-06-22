import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue)
import VModal from 'vue-js-modal'


Vue.use(VModal, { componentName: 'lessonmodal' })



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
