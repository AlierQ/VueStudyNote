<template>
    <div class="app">
        <h1>{{msg}}学生姓名:{{studentName}}</h1>
        <!-- v-on在这里给Student组件实例对象上绑定事件，事件名为zezeze
            一旦有人调用zezeze事件，demo函数就会被调用
         -->
         <!-- 通过给父组件绑定一个自定义事件，实现子组件给父组件传递数据(v-on) -->
        <!-- <Student v-on:zezeze='getStudentName'/> -->

        <!-- 简写形式 并且可以使用once等事件修饰符 -->
        <Student @zezeze='getStudentName' @demo="m1" @click.native="show"/>
        <!-- 在组件标签中使用click等原生事件,会被当做是自定义事件 -->
        <!-- 使用修饰符native可以标志click等方法是原生的 -->

        <!-- 通过this.$refs.student 就能过去到Student的实例对象-->
        <!-- ref在html标签上是Dom，在组件标签上获取到的是组建的实例对象 -->
        <!-- 通过给父组件绑定一个自定义事件，实现子组件给父组件传递数据(使用ref) 较为灵活 -->
        <!-- <Student ref="student"/> -->
        
        
        
        
        <!-- 通过父组件给子组件传递函数类型的props实现：子组件给父组件传递数据 -->
        <School :getSchoolName="getSchoolName"/>


    </div>
</template>

<script>
    // 引入Student组件
    import Student from './components/Student'    
    // 引入School组件
    import School from './components/School.vue'

    export default {
        name:'App',
        data() {
            return {
                msg:'你好啊',
                studentName:''
            }
        },
        components:{
            Student,
            School
        },methods: {
            getSchoolName(name){
                console.log('App收到了学校名：',name);
            },
            // 多个数据时接收数据 :普通写法
            // getStudentName(name,a,b,c,d)

            // 多个数据时接收数据 :ES6写法
            // 将除了name之外的参数都包装在a这个数组内
            getStudentName(name,...a){

                console.log('App收到了学生名：',name,a);
                this.studentName = name;
            },
            m1(){
                console.log('demo被触发了!');
            },
            show(){
                console.log('点击了show');
            }
        },
        // 挂载完毕，写在哪个组件，就是哪个组件挂载完毕
        mounted(){
            // 通过组件实例对象，调用$on方法将自定义事件绑定在实例对象上
            // this.$refs.student.$on('zezeze',this.getStudentName)

            // 若要只想要触发一次
            // this.$refs.student.$once('zezeze',this.getStudentName)

            // 可以实现例如等待3秒之后再将自定义事件绑定在组件实例对象上
            // setTimeout(()=>{
            //     this.$refs.student.$on('zezeze',this.getStudentName)
            // },3000)
        }
    }

</script>
<style>
    .app{
        background-color: blueviolet;
        padding: 5px;
    }
</style>
