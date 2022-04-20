import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.config.productionTip = false;
Vue.use(ElementUI);

var axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8090';
Vue.prototype.$axios =axios;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');