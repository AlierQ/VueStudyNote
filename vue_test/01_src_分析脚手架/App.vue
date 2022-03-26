<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <School/>
        <Student/>
    </div>
</template>

<script>
    // App作用是汇总组件
    // 引入School组件
    import School from './components/School'
    // 引入Student组件
    import Student from './components/Student'
    
    export default {
        name:'App',
        components:{
            // School:School
            School,
            Student
        }
    }
</script>

<style>

</style>