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
            <input type="checkbox" 
                :checked="todo.done" 
                @click="handleCheck(todo.id)"
            />
            <span v-show="!todo.isEdit"> {{todo.title}}</span>
            <input 
                ref="edit"
                type="text" 
                v-show="todo.isEdit" 
                :value='todo.title' 
                @blur='handleBlur(todo,$event)'
            >
        </label>
        <button class="btn btn-danger" @click="deleteItem(todo.id,todo.title)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-info" style="margin-right:5px" @click="handleEdit(todo)">编辑</button>
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
            },
            // 编辑Todo
            handleEdit(todo){
                // console.log(todo);
                // 非响应式添加数据，不会拥有seter和geter方法也不会解析模板展现在页面
                // todo.isEdit = true;

                // 如果isEdit存在
                // hasOwnProperty 查看身上有没有目标属性
                if(todo.hasOwnProperty('isEdit')){
                    // console.log('已经存在isEdit属性');
                    todo.isEdit = true
                }
                // isEdit不存在
                else{
                    // 通过set方法响应式添加属性
                    // console.log('新建isEdit属性');
                    this.$set(todo,'isEdit',true)
                }
                // console.log(this.$refs.edit);
                // 执行该语句的时候input框还没有在页面上
                // this.$refs.edit.focus()

                // 方法一 延时计时器
                // setTimeout(()=>{
                //     this.$refs.edit.focus()
                // },100)


                // 方法二 $nextTick
                // nextTick指定的回调会在Dom节点更新完毕之后执行
                this.$nextTick(function () {
                    this.$refs.edit.focus()
                })
            },
            // input失去焦点回调（真正实现修改逻辑）
            handleBlur(todo,event){
                todo.isEdit = false

                // 输入不能为空
                if(!event.target.value.trim()) return alert('输入不能为空！')

                // 调用事件总线上的自定义事件updateTodo事件
                this.$bus.$emit('updateTodo',todo.id,event.target.value)
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