<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 多个插槽 -->
        <slot name="center">这里是一个中间插槽</slot>
        <slot name="footer">这里是一个底部插槽</slot>
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