<template>
    <div>
        <button @click="isShow = !isShow">显示or隐藏</button>
        <!-- 普通写法 -->
        <!-- <h1 v-show="isShow" class="go">你好啊!</h1> -->

        <!-- 动画效果要用transition标签包裹起来 -->
        <!-- Vue在根据数据变化的时候自动播放对应的动画 -->
        <transition>
            <h1 v-show="isShow">你好啊!</h1>
        </transition>

        <!-- transition还可以指定name -->
        <!-- :appear='true' (也可以直接写apper) 可以让动画一开始就播放  -->
        <!-- <transition name="hello" appear> -->
        <transition name="hello" :appear="true">
            <h1 v-show="isShow">你好啊!</h1>
        </transition>
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
    /* 普通写法 */
    .come{
        animation: move 1s;
    }
    .go{
        animation: move 1s reverse;
    }

    /* Vue动画写法 */
    /* 进入(显示)动画 */
    .v-enter-active{
        animation: move 1s;
    }
    /* 离开(隐藏)动画 */
    .v-leave-active{
        animation: move 1s reverse;
    }

    /* 指定了name的transition的动画 */
    /* 进入(显示)动画 */
    .hello-enter-active{
        animation: move 1s;
    }
    /* 离开(隐藏)动画 */
    .hello-leave-active{
        animation: move 1s reverse;
    }


    @keyframes move{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>