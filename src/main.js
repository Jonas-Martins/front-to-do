import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins/axios'

Vue.config.productionTip = false

window._Vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
