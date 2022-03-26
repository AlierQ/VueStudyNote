// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 关闭Vue生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
    el:'#app',
    // 通过render中的CreateElement()向页面中添加App标签
    render: h => h(App),
    beforeCreate() {
        // 安装全局事件总线
        Vue.prototype.$bus = this
    },
});