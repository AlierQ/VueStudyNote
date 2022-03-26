<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School />
        <Student />
    </div>
</template>

<script>
    // 引入Student组件
    import Student from './components/Student'    
    // 引入School组件
    import School from './components/School.vue'

    export default {
        name:'App',
        data() {
            return {
                msg:'你好啊',
                studentName:''
            }
        },
        components:{
            Student,
            School
        }
    }
</script>
<style>
    .app{
        background-color: blueviolet;
        padding: 5px;
    }
</style>
