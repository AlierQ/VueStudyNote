<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">点击提交学校名称</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        props:['getSchoolName'],
        data(){
            return {
                name:'hehehe',
                address:'北京'
            }
        },
        methods: {
            sendSchoolName()
            {
                this.getSchoolName(this.name)
            }
        },
        
    }
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
        margin-top: 20px;
    }
</style>