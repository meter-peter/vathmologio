import {createApp} from 'vue';
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue} from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



createApp(App).use(router).use(VueAxios, axios).use(BootstrapVue).mount('#app');


