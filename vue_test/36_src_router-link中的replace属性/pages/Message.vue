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
        }
    }
</script>

<style>

</style>