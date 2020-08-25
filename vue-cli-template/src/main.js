import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/axios'
import '@/svg';
import SvgIcon from '@/components/svg/SvgIcon';

Vue.component('SvgIcon', SvgIcon);

Vue.config.productionTip = false

console.log(`Vue当前使用的版本:${Vue.version}`)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
