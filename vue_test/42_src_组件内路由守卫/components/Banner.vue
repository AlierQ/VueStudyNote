<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        </div>
        
    </div> 
</template>

<script>
    export default {
        name:'Banner',
        methods:{
            // 使用windos.history的back()和forward()也可以实现
            back(){
                this.$router.back();
            },
            forward(){
                this.$router.forward();
            }
            // go(number) 
            // 正数向前跳
            // 负数向后跳
        }
    }
</script>

<style>

</style>