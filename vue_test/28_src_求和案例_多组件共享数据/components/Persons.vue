<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入一个名字" v-model="name">
        <h3 style="color:red">上方组件求和为：{{sum}}</h3>
        <button @click="add">添加</button>
        <ul>
            <li v-for="person in personList" :key="person.id" >{{person.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import {mapState} from 'vuex'
    export default {
        name:'Persons',
        data() {
            return {
                name:''
            }
        },
        computed:{
            // ...mapState(['personList']),
            personList(){
                return this.$store.state.personList
            },
            sum(){
                return this.$store.state.sum
            }
        },
        methods: {
            add(){
                const personObj = {id:nanoid(),name:this.name}
                this.name = ''
                // 没有别的业务逻辑，所以直接commit给mutations
                this.$store.commit('ADD_PERSON',personObj)
            }
        },
    }
</script>

<style>

</style>