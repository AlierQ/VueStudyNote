// 该文件用于创建vuex中最为核心的store

// 要注意Vuex的版本问题！！！

// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// 引入count求和模块
import countOptions from './count'

// 引入person人员管理模块
import personOptions from './person'

// 使用vuex
Vue.use(Vuex)

// 创建store并暴露store
export default new Vuex.Store({
    // 模块化
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})

