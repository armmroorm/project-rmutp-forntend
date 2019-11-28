import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store';
import { firebaseConfig } from './config'
import firebase from 'firebase/app';
import 'firebase/auth';
import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
firebase.initializeApp(firebaseConfig)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter);
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
