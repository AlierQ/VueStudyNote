<template>
    <ul class="todo-main">
        <TodoItem 
            v-for='todo in todos' 
            :key="todo.id" 
            :todo='todo'
            :checkTodo="checkTodo"
            :delTodo="delTodo"
        />
    </ul>
</template>

<script>
    import TodoItem from './TodoItem.vue'

    export default {
        name:'TodoList',
        components:{
            TodoItem
        },
        data() {
            return {
            }
        },
        props:['todos','checkTodo','delTodo']
    }
</script>

<style scoped>
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>