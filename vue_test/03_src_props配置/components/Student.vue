<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生性别：{{myAge+1}}</h2>
        <button @click='updateAge'>尝试修改已经收到的年龄</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            // console.log(this);
            return {
                msg:'我是哈哈',
                // 优先级 :外部>内部
                // name:'张三'
                
                // 要对传入参数进行修改可以用一个新的参数获取到这个传入参数的值,从而进行修改
                // 获取到传入的age,将其放入到myAge中
                myAge:this.age
            }
        },
        // 简单声明接收
        // props传入的数据时不可更改的
        // props:['name','age','sex']

        // 接收的同时对数据进行类型限制
        // props:{
        //     // 指定传入参数的类型
        //     name:String,
        //     age:Number,
        //     sex:String
        // }

        // 接收的同时对数据进行类型限制 + 默认值的指定 + 必要性的限制
        props:{
            name:{
                type:String, // name的类型是String
                required:true  // name是必传的
            },
            age:{
                type:Number,
                default:99  // 当没有传入时的默认值
            },
            sex:{
                type:String,
                required:true
            }
        },
        methods:{
            updateAge(){
                this.myAge = 88
            }
        }
    }
</script>

<style>

</style>