import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate';
import axios from 'axios'
import VueAxios from 'vue-axios'
import  store  from './store';
Vue.use(VeeValidate);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
