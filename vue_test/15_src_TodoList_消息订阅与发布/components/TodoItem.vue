<template>
    <li>
        <label>
            <!-- 使用V-model也能得到动态效果但是违背了不能修改props的原则 -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->

            <!-- 或者使用 :checked='todo.done' 也能动态显示todo是否勾选 -->
            <!-- 
                @click
                @change
                通过点击事件将要操作的todo传到逐层传到中App
             -->
            <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
            <span> {{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="deleteItem(todo.id,todo.title)">删除</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'TodoItem',
        // 声明接收todo对象
        props:['todo'],
        methods: {
            handleCheck(id){
                // 调用绑定在全局事件总线上的checkTodo事件
                this.$bus.$emit('checkTodo',id)
            },
            deleteItem(id,title){
                if(confirm("确认要删除'"+ title +"'吗？"))
                {
                    // 发布一个消息
                    pubsub.publish('delTodo',id)
                }
            }
        }
    }
</script>

<style scoped>
    /*item*/
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }
    li:hover{
        background-color: #ddd;
    }
    li:hover button{
        display:block;
    }
</style>