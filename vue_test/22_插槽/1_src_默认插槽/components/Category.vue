<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 定义一些插槽，等待组件使用者进行填充 -->
        <slot>这里是一个插槽</slot>
    </div>
</template>

// https://s3.ax1x.com/2021/01/16/srJ1q0.jpg"
<script>
    export default {
        name:'Category',
        props:['title','listData'],

    }
    
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
    }
</style>