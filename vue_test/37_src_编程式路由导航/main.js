import Vue from 'vue'
import App from './App.vue'

// 引入VueRouter
import VueRouter from 'vue-router'
// 引入一个路由器
import router from './router'

// 关闭Vue生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')



