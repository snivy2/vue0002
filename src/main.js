// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import Vuex from 'vuex'

import App from './App'
import router from './router'
import store from './store.js'

import 'mint-ui/lib/style.css'
import '../static/mui/css/mui.min.css'
import '../static/mui/css/icons-extra.css'

Vue.use(MintUI)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
