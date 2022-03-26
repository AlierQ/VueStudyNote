<template>
    <div>
        <School/>
        <Student/>
    </div>
</template>

<script>
    // App作用是汇总组件
    // 引入School组件
    import School from './School.vue'
    // 引入Student组件
    import Student from './Student.vue'
    
    export default {
        name:'App',
        data(){

        },
        components:{
            // School:School
            School,
            Student
        }
    }
</script>

<style>

</style>