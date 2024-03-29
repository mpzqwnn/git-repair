import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import fs from 'fs'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)


new Vue({
  render: h => h(App),
  axios,
  router,
  store,
  fs,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
