<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- 两种添加数据的方法：
                    第一种是将数据直接传入子组件进行添加  :todos='todos' 传入对象数组 (违背原则修改了props中的数据)
                
                    第二种是用函数将子组件中的数据传出来进行添加  :addTodo='addTodo' 传入一个方法
                -->
                <TodoHeader 
                    @addTodo='addTodo'
                />
                <TodoList 
                    :todos="todos" 
                />
                <TodoFooter 
                    :todoNumber="todoNumber" 
                    :allNumber="allNumber" 
                    :isAllChcek="isAllChcek"
                    @delDoneTodo="delDoneTodo"
                    @checkAll="checkAll"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoFooter from './components/TodoFooter.vue'

    import pubsub from 'pubsub-js'

    export default {
        name:'App',
        components:{
            TodoHeader,
            TodoList,
            TodoFooter
        },
        data() {
            return {
                // 如果localstorage中没有数据就赋值一个空数组
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods: {
            // 自定义事件addTodo的回调函数
            addTodo(todoObj){
                // 将新建todo对象插入到第一个
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
            // 可以使用下划线进行占位
            delTodo(_,id){
                this.todos = this.todos.filter((todo)=>{
                    return todo.id !== id
                })
                // 简写形式
                // this.todos = this.todos.filter(todo => todo.id !== id)
            },
            // 自定义事件delDoneTodo的回调函数
            // 清除已完成任务
            delDoneTodo(){
                this.todos = this.todos.filter(todo => todo.done === false)
            },
            // 自定义事件checkAll的回调函数
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

        },
        watch:{
            // 监视属性简写形式
            // 一个参数默认newValue
            // 此时没有开启深度监视，不能够监视到对象中的属性改变了，例如done属性
            // 故不能写成简写形式
            // todos(value){
            //     localStorage.setItem('todos',JSON.stringify(value))
            // }
            todos:{
                // 进行深度监视，这样能够监视todos中的done属性是否发生改变，从而触发本地存储
                deep:true,
                handler(value){
                    localStorage.setItem('todos',JSON.stringify(value))
                }

            }
        },
        mounted() {
            // 收数据的人去绑定自定义事件
            this.$bus.$on('checkTodo',this.checkTodo)
            
            // 订阅delTodo事件，并指定回调函数为methods中的delTodo
            this.pubid = pubsub.subscribe('delTodo',this.delTodo)

            // 绑定updateTodo事件
            this.$bus.$on('updateTodo',(id,title)=>{
                this.todos.forEach((todo)=>{
                    if(todo.id == id)
                        todo.title = title
                })
            })

        },
        beforeDestroy() {
            this.$bus.$off(['checkTodo','delTodo','updateTodo'])

            // 取消事件的订阅
            pubsub.unsubscribe(this.pubid)
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

    .btn-info {
    color: #fff;
    background-color: #4491cf;
    border: 1px solid #215e97;
    }

    .btn-info:hover {
    color: #fff;
    background-color: #215e97;
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