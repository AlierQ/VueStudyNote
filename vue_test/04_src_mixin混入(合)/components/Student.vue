<template>
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    // 引入一个混合
    import {mixin,mixin2} from '../mixin'
    export default {
        name:'Student',
        data(){
            return {
                name:'lalala',
                sex:'男',
                // 如果混合中和原来的数据、方法冲突，则以原有数据为准
                x:666
            }
        },
        mixins:[mixin,mixin2],
        mounted(){
            console.log('aaa');
        }
    }
</script>

<style>

</style>