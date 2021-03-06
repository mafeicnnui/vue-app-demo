import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.axios = axios

document.title='用户查询 '

new Vue({
  render: h => h(App),
}).$mount('#app')
