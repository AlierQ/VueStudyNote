<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入一个名字" v-model="name">
        <button @click="add">添加</button>
        <h3 style="color:red">上方组件求和为：{{sum}}</h3>
        <h3>列表中第一人的名字是：{{firstPersonName}}</h3>
        <button @click="addWang">添加一个王姓的人</button>
        <button @click="addPers">添加一个人，名字随机</button>
        <ul>
            <li v-for="person in personList" :key="person.id" >{{person.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name:'Persons',
        data() {
            return {
                name:''
            }
        },
        computed:{
            personList(){
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPersonName(){
                // .点语法中不能出现“/”
                // 所以这里要使用对象名['属性值']
                return this.$store.getters['personAbout/firstPersonName']
            }
        },
        methods: {
            add(){
                const personObj = {id:nanoid(),name:this.name}
                this.name = ''
                // 在store模块化之后如果不使用map等方法，在commit给mutationd时写法如下
                this.$store.commit('personAbout/ADD_PERSON',personObj)
            },
            addWang(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.dispatch('personAbout/addPersonWang',personObj)
                this.name = ''
            },
            addPers(){
                this.$store.dispatch('personAbout/addPersonServer')
            }
        },
        mounted(){
            // console.log(this.$store);
        }
    }
</script>

<style>

</style>