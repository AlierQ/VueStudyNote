<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" />
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'

    export default {
        name:'TodoHeader',
        data() {
            return {
            }
        },
        methods: {
            add(event){
                // 将用户对象包装成为一个对象todo
                if(event.target.value.trim()==='') return alert('数据不能为空')
                const todoObj = {
                    id:nanoid(),
                    title:event.target.value,
                    done:false
                }
                
                // 调用自定义事件addTodo并传入对象参数todoObj
                this.$emit('addTodo',todoObj)

                // 清空输入
                event.target.value=''

            }
        }
    }
</script>

<style scoped>
    /*header*/
    .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    }

    .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>