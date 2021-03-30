import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueClipboard from 'vue-clipboard2'
import VueAnalytics from 'vue-analytics'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(VueAnalytics, {
  id: 'UA-155398591-1'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
