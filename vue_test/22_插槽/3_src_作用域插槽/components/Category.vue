<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 默认插槽 -->
        <!-- 将games数据传递过去 -->
        <slot :games="games" x="hallo">这里是一个插槽</slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data() {
            return {
                games:['红色警戒',' 穿越火线','劲舞团','超级玛丽']
            }
        }

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
</style>