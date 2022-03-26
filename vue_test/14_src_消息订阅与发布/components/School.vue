<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'

    export default {
        name:'Student',
        data(){
            return {
                name:'hehehe',
                address:'北京'
            }
        },
        methods: {
            demo(msgName,data){
                console.log(this);
                console.log('有人发布了hello消息，hello消息的回调执行了',data);
            }
        },
        mounted() {
            // 订阅消息
            // 使用pubsub库，使用普通函数的时候this的指向undefine
            // 想要使用pubsub库this指向为组件实例对象的时候，则要使用箭头函数
            // this.pubid =  pubsub.subscribe('hello',(msgName,data)=>{
            //     console.log(this);
            //     console.log('有人发布了hello消息，hello消息的回调执行了',data);
            // })


            // 或者将回调函数写在methods里面,也能使得this的指向是组件实例对象
            this.pubid = pubsub.subscribe('hello',this.demo)
        },
        beforeDestroy(){
            // 组件被销毁的时候取消消息的订阅
            pubsub.unsubscribe(this.pubid)
        }
    }
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
        margin-top: 20px;
    }
</style>