<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- 两种添加数据的方法：
                    第一种是将数据直接传入子组件进行添加  :todos='todos' 传入对象数组 (违背原则修改了props中的数据)
                
                    第二种是用函数将子组件中的数据传出来进行添加  :addTodo='addTodo' 传入一个方法
                -->
                <TodoHeader 
                    :addTodo='addTodo'
                />
                <TodoList 
                    :todos="todos"
                    :checkTodo="checkTodo" 
                    :delTodo="delTodo"   
                />
                <TodoFooter 
                    :todoNumber="todoNumber" 
                    :allNumber="allNumber" 
                    :isAllChcek="isAllChcek"
                    :delDoneTodo="delDoneTodo"
                    :checkAll="checkAll"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoFooter from './components/TodoFooter.vue'

    export default {
        name:'App',
        components:{
            TodoHeader,
            TodoList,
            TodoFooter
        },
        data() {
            return {
                todos:[
                    {id:'001',title:'吃饭',done:false},
                    {id:'002',title:'睡觉',done:true},
                    {id:'003',title:'打球',done:false},
                ]
            }
        },
        methods: {
            // 添加一个todo
            addTodo(todoObj){
                // console.log('收到数据' + todoObj);
                this.todos.unshift(todoObj)
            },
            // 勾选or取消勾选一个todo
            checkTodo(id){
                this.todos.forEach((todo)=>{
                    if(todo.id === id)
                        todo.done = !todo.done
                })
            },
            // 删除一个Todo
            delTodo(id){
                this.todos = this.todos.filter((todo)=>{
                    return todo.id !== id
                })
                // 简写形式
                // this.todos = this.todos.filter(todo => todo.id !== id)
            },
            // 清除已完成任务
            delDoneTodo(){
                this.todos = this.todos.filter(todo => todo.done === false)
            },
            // 勾选or不勾选 全选按钮
            checkAll(){
                var temp = !this.isAllChcek;
                this.todos.forEach((todo)=>{
                        todo.done = temp
                })
            }
        },
        computed:{
            // 已完成数量
            todoNumber(){
                // var sum = 0
                // for(var todo of this.todos){
                //     if(todo.done == true)
                //         sum++
                // }
                // return sum


                // // reduce函数可以被数组的每个元素调用
                // pre是上一次调用reduce的返回值，初始值为0
                // current是每一个数据项
                // this.todos.reduce((pre,current)=>{
                //     return pre + (current.done ? 1 : 0)
                // },0)

                // 简写形式
                return this.todos.reduce((pre,current)=> pre + (current.done ? 1 : 0),0)
            },
            // 所有数量
            allNumber(){
                return this.todos.length
            },
            // 是否全选
            isAllChcek(){
                // for(var todo of this.todos){
                //     if(todo.done == false)
                //         return false
                // }
                // return true

            return ((this.allNumber == this.todoNumber) && this.allNumber != 0)
            }

        }
    }
</script>

<style>
    /*base*/
    body {
    background: #fff;
    }

    .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }

    .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    }

    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
</style>