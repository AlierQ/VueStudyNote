<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">点我输出上方的Dom元素</button>
        <!-- 组件通过sch可以拿到对应的组件实例对象 -->
        <School ref="sch"/>
    </div>
</template>

<script>
    // 引入School组件
    import School from './components/School.vue'    

    export default {
        name:'App',
        components:{
            School
        },
        // 注册School组件
        data(){
            return {
                msg:'欢迎学习Vue'
            }
        },
        methods: {
            showDom(){
                // this.ref.xxx就能获取到ref=xxx的Dom对象
                console.log(this.$refs.title);
                // 按钮Dom
                console.log(this.$refs.btn);
                // School组件实例对象
                console.log(this.$refs.sch);
            }
        },
    }

</script>

<style>

</style>