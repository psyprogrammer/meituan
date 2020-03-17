import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/reset.css'

Vue.config.productionTip = false

Vue.use(elementUI);

Vue.directive('documentClick', {
  bind(el, bind) {
    document.addEventListener('click', bind.value, false)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')