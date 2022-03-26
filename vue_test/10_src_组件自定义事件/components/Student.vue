<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>当前求和为:{{number}}</h2>
        <button @click="add">点我number++</button><br>
        <button @click="sendStudentName">点击提交学生名称</button><br>
        <button @click="unbind">解绑zezeze事件</button><br>
        <button @click="death">点击销毁Student实例对象</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return {
                name:'lalala',
                sex:'男',
                number:0
            }
        },
        methods: {
            sendStudentName(){
                // 通过组件实例对象身上的$emit()方法就可以触发
                // Student实例对象身上的zezeze方法
                // 第二个参数可以传递数据
                // 可以传递多个数据
                this.$emit('zezeze',this.name,77,88,99)
                // this.$emit('demo')
            },
            unbind(){
                // 解绑自定义事件事件 ,只适用于解绑一个自定义事件
                this.$off('zezeze')
                // 解绑多个自定义事件
                // this.$off(['zezeze','demo'])
            },
            death(){
                this.$destroy() //销毁了当前的Student组件实例
                // 销毁后所有自定义事件全都不奏效
            },
            add(){
                this.number++
                console.log('add被调用了');
            }
        },
    }
</script>

<style scoped>
    .student{
        background-color: #ccc;
        padding: 5px;
    }
</style>