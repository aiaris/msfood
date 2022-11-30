import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';
Vue.use(VueAxios,axios)
Vue.use(ElementUI);
Vue.prototype.moment=moment

Vue.config.productionTip = false
axios.defaults.baseURL = "http://39.103.66.129:3001"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
