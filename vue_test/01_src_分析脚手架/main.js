/**
 * 项目入口文件
 */

// 引入Vue（残缺版）
import Vue from 'vue'
// 'vue/dist/vue' 引入完整版的vue
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象 --- vm
new Vue({
  el:'#app',
  // 将app组件放入容器中
  render: h => h(App),


  // render(createElement){
  //   // 创建标签，内容设置为“你好啊”
  //   return createElement('h1','你好啊!')
  // }
  // 精简写法
  // render:q => q('h1','你好啊!')

  // template:`<h1>你好</h1>`
  // component:{App}
})
// .$mount('#app') 指定容器 等同于el:xxxx


let a = 1