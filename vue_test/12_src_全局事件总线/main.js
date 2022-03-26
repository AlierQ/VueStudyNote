// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 关闭Vue生产提示
Vue.config.productionTip = false

// 用一个组件实例对象来充当全局事件总线
// const Demo = Vue.extend({})
// const d = new Demo()
// Vue.prototype.x = d


// 创建vm
new Vue({
    el:'#app',
    render: h => h(App),
    // new Vue()完成，数据代理还未开始
    beforeCreate(){
        // 让Vue实例作为全局事件总线
        // 安装全局事件总线
        Vue.prototype.$bus = this
    }
});

