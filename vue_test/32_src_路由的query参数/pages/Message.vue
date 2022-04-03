<template>
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <!-- 传参方式一：query参数  url?id=666&name=heihei -->
                <!-- 使用ES6中的模板字符串（可以在其中混入字符串变量）+v-bind（将属性转换成js语句） -->
                <!-- <router-link :to="`/home/message/detail?id=${msg.id}&name=${msg.title}`">{{msg.title}}</router-link> -->
            
                <!-- to的对象写法 （推荐写法） -->
                <router-link :to="{
                    path:'/home/message/detail',
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