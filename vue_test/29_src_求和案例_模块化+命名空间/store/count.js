// 求和功能相关的配置
export default {
    // 模块分类名才能够被mapState识别
    namespaced:true,
    actions:{
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
    },
    mutations:{
        ADD_NUMBER(state,value){
            state.sum += value
        },
        SUB_NUMBER(state,value){
            state.sum -= value
        }
    },
    state:{
        sum:0, // 当前的和
        school:"yyy",
        subject:"前端",
    },
    getters:{
        bigsum(state){
            return state.sum*10
        }
    }
}