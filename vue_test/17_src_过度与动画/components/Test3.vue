<template>
    <div>
        <button @click="isShow = !isShow">显示or隐藏</button>

        <!-- 
            配置
            name="animate__animated animate__bounce" 
            进入动画
            enter-active-class="animate__bounceInLeft"
            离开动画
            leave-active-class="animate__backOutRight"
         -->
        <transition
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__bounceInLeft"
            leave-active-class="animate__backOutRight"
        >
            <h1 v-show="isShow" key="1">啦啦啦</h1>
        </transition>

    </div>
</template>

<script>
    // 引入animate第三方动画库
    import 'animate.css'
    export default {
        name:'Test',
        data(){
            return {
                isShow:true
            }
        }
    }
</script>

<style scoped>
    h1{
        background-color: orange;
    }
</style>