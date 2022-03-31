import Vue from 'vue'
import App from './App.vue'

// 引入插件vue-resource
import VueResource from 'vue-resource'
// 引入store
import store from './store'
// 关闭Vue生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)

new Vue({
  render: h => h(App),
  // 引入并且使用vuex插件之后，再配置store就可以在所有的组件实例对象上看到$store
  store,
  // 安装事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')



