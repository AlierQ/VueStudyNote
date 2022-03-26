<template>
    <ul class="todo-main">
        <!-- 多个元素的过度 -->
        <transition-group name="todo">
            <TodoItem 
                v-for='todo in todos' 
                :key="todo.id" 
                :todo='todo'
            />
        </transition-group>
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
        props:['todos']
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

    /* 动画 */
    /* 指定了name的transition的动画 */
    /* 进入(显示)动画 */
    .todo-enter-active{
        animation: move .5s;
    }
    /* 离开(隐藏)动画 */
    .todo-leave-active{
        animation: move .5s reverse;
    }


    @keyframes move{
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>