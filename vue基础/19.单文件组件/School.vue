<template>
    <!-- template标签不参与结构的编译 -->
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName"></button>
    </div>
</template>

<script>
    // 组件的交互相关的代码（数据、方法等等）
    // 分别暴露
    // export const school
    // 使用方式： import {???} form ???
    
    // 默认暴露简写
    export default {
        name:'School',
        data(){
            return {
                name:'啦啦啦',
                address:'北京'
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }    
        },
    }

    // 统一暴露
    // export {school}

    // 默认暴露 （只暴露一个的时候往往使用这个）
    // export default school
    // 使用方式 ：import ??? from ???
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: #ccc;
    }
</style>