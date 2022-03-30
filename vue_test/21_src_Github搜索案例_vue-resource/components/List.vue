<template>
    <div class="row">
        <!-- 展示用户列表 -->
        <div v-show="users.length" class="card" v-for="user in users" :key="user.login">
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
        <!-- 展示欢迎词 -->
        <h1 v-show="isFirst">欢迎使用！</h1>
        <!-- 展示加载中 -->
        <h1 v-show="isLoading">Loading...</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="errMsg.length">{{errMsg}}</h1>
    </div>
</template>

<script>
    export default {
        name:"List",
        data(){
            return {
                isFirst:true,
                isLoading:false,
                errMsg:'',
                users:[]
            }
        },
        mounted() {
            // 绑定总线自定义事件
            this.$bus.$on("getUsers",(users)=>{
                // console.log('我是组件List，收到了数据',users);
                this.users = users
                // 欢迎词和加载都取消
                this.isFirst=false
                this.isLoading=false
            })
            // 绑定加载中自定义事件
            this.$bus.$on("loading",()=>{
                // 取消欢迎词，展示加载中
                this.isFirst=false
                this.isLoading=true
            })
            // 绑定加载中自定义事件
            this.$bus.$on("error",(msg)=>{
                // 取消欢迎词，展示加载中
                this.isFirst=false
                this.isLoading=false
                this.errMsg = msg
            })
        },
    }
</script>

<style>

</style>