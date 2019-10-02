import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store';
import firebase from 'firebase/firebase';
import 'firebase/auth';
import { firebaseConfig } from './config'
// import VeeValidate from 'vee-validate'
firebase.initializeApp(firebaseConfig)
// Vue.use(VeeValidate)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
