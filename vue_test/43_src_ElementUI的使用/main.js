// 引入Vue
import Vue from 'vue'
// 完整引入
// 引入elementUI组件库
// import ElementUI from 'element-ui';
// 引入elementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';
// 引入app

// 按需引用
import { Button, DatePicker,Row } from 'element-ui';
// 两种方式都可以使用
Vue.component(Button.name, Button);
Vue.use(DatePicker)
Vue.use(Row)
/* 或写为
 * Vue.use(Button)
 * Vue.use(DatePicker)
 */

import App from './App.vue'

// 关闭Vue生产提示
Vue.config.productionTip = false

// 应用ElementUI
// Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount('#app')



