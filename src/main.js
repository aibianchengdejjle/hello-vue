// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  Vueaxios from 'vue-axios'
import axios from 'axios'
Vue.config.productionTip = false
// 安装路由
Vue.use(router)
// 使用Element
Vue.use(Element)

// 使用axios
Vue.use(Vueaxios,axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
