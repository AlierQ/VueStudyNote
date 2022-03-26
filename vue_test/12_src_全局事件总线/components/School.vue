<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return {
                name:'hehehe',
                address:'北京'
            }
        },
        mounted() {
            // 在事件总线上绑定一个自定义事件hello
            this.$bus.$on('hello',(data)=>{
                console.log('我是School组件，收到了数据',data);
            })
        },
        // 销毁组件之前的生命周期钩子
        beforeDestroy() {
            // 销毁绑定在总线上的自定义事件
            this.$bus.$off('hello')
        },
    }
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
        margin-top: 20px;
    }
</style>