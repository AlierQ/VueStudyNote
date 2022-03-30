import Vue from 'vue'
import App from './App.vue'
// 引入插件vue-resource
import VueResource from 'vue-resource'

Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)

new Vue({
  render: h => h(App),
  // 安装事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')



