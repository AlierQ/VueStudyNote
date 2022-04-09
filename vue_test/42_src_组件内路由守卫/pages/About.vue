<template>
    <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name:'About',
        // 通过路由规则，进入改组件时被调用
        // 进来的时候to的信息是About的
        beforeRouteEnter (to, from, next) {
            // ...
            console.log('APP-beforeRouterEnter')
            if(to.meta.isAuth){ //判断是否需要权限
                if(localStorage.getItem('school') === 'lalala'){
                    next()
                }
                else{
                    alert('学校名不对,无权访问News')
                }
            }
            else{
                next()
            }
        },
        // 通过路由规则，离开该组件时被调用
        // 出去的时候from的信息是About的
        beforeRouteLeave (to, from, next) {
            // ... 
            console.log('APP-beforeRouterLeave');
            next()
        }
    }
</script>

<style>

</style>