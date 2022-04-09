<template>
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <!-- 跳转路由并携带params参数 to字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{msg.title}}</router-link> -->
                
                <!-- 跳转路由并携带params参数 to对象写法-->
                <router-link :to="{
                    // 使用params传递参数的时候要使用name,不能使用path
                    name:'xiangqing',
                    query:{
                        id:msg.id,
                        title:msg.title
                    }
                }">
                    {{msg.title}}
                </router-link>
                <button @click="pushShow(msg)">push查看</button>
                <button @click="replaceShow(msg)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data(){
            return {
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'}
                ]
            }
        },methods: {
            // 使用push进行跳转，调用函数方式实现
            pushShow(msg){
                // console.log(this.$router);
                this.$router.push({
                    name:'xiangqing',
                    query:{
                        id:msg.id,
                        title:msg.title
                    }
                })
            },
            // 使用replace进行跳转，调用函数方式实现
            replaceShow(msg){
                this.$router.replace({
                    name:'xiangqing',
                    query:{
                        id:msg.id,
                        title:msg.title
                    }
                })
            }
        },
    }
</script>

<style>

</style>