// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入混合
import {mixin,mixin2} from './mixin'
// 关闭Vue生产提示
Vue.config.productionTip = false

// 全局传入混合
Vue.mixin(mixin)
Vue.mixin(mixin2)

// 创建vm
new Vue({
    el:'#app',
    // 通过render中的CreateElement()向页面中添加App标签
    render: h => h(App)
});