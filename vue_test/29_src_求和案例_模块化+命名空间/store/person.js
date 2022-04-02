// 人员管理功能相关的配置
import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王')===0){
                context.commit('ADD_PERSON',value)
            }
            else{
                alert("添加的人必须为王姓")
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=socia1').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})

                },
                error => {
                    console.log('错误原因：',error.message);
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'},
            {id:'002',name:'李四'},
            {id:'003',name:'王五'},
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}