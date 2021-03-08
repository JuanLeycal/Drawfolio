import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import vuetify from './plugins/vuetify';
import bootstrap_vue from 'bootstrap-vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
const VueScrollTo = require('vue-scrollto')

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
Vue.use(VueScrollTo)
Vue.use(bootstrap_vue)


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
