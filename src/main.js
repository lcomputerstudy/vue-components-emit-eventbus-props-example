import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Layout from './components/layout'; // 컴포넌트 전역으로 선언해주고 사용

//Vue.component('컴포넌트명',옵션)
Vue.component('Layout',Layout)
Vue.config.productionTip = false


export const eventBus = new Vue()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
