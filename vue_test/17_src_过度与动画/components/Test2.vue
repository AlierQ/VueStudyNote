<template>
    <div>
        <button @click="isShow = !isShow">显示or隐藏</button>
        <!-- <transition name="hello" appear>
            <h1 v-show="isShow">你好啊!</h1>
        </transition> -->
        <!-- 多个元素过度时 -->
        <transition-group name="hello" appear>
            <h1 v-show="isShow" key="1">啦啦啦</h1>
            <h1 v-show="!isShow" key="2">嘿嘿嘿</h1>
        </transition-group >

    </div>
</template>

<script>
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

    /* .hello-enter-active{
        
    } */
    
    /* 进入的起点 离开的终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }

    /* 进入过程中  离开过程中 */
    .hello-enter-active,.hello-leave-active{
        transition: 1s linear;
    }

    /* 进入的终点 离开的起点*/
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }

</style>