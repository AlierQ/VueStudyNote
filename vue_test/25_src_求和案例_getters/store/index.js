// 该文件用于创建vuex中最为核心的store

// 要注意Vuex的版本问题！！！

// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'


// 准备actions——用于响应组件中的动作
const actions = {
    // 没有业务逻辑的可以直接使用commit进行调用mutation
    // addNumber(context,value){
    //     // console.log("加号action函数被调用了",context,value);
    //     context.commit("ADD_NUMBER",value)
    // }, 
    // subNumber(context,value){
    //     context.commit("SUB_NUMBER",value)
    // },
    addOdd(context,value){
        // 业务逻辑 ：奇数再加
        if(context.state.sum%2)
            context.commit("ADD_NUMBER",value)
    },
    addWait(context,value){
        // 业务逻辑：延时500ms再加
        setTimeout(()=>{
            context.commit("ADD_NUMBER",value)
        },500)
    }
}

// 准备mutations——用于操作数据（state）
const mutations = {
    ADD_NUMBER(state,value){
        state.sum += value
    },
    SUB_NUMBER(state,value){
        state.sum -= value
    }
}

// 准备state——用于存储数据
const state = {
    sum:0 // 当前的和
}

// 准备getters——用于将state中的数据进行加工(类似于data中的computed)
const getters = {
    bigsum(state){
        return state.sum*10
    }
}

// 使用vuex
Vue.use(Vuex)

// 创建store并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

