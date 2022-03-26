<template>
    <div>
        <!-- 这里数值也要用单引号传入 -->
        <!-- :age='18' 加上:之后18会被当成js表达式,也相当于数值的18 -->
        <Student name='李四' sex='女' :age='18'/>
    </div>
</template>

<script>
    // 引入School组件
    import Student from './components/Student'    

    export default {
        name:'App',
        components:{
            Student
        }
    }

</script>

<style>

</style>