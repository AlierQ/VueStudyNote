<template>
    <div>
        <h1>求和为：{{sum}}</h1>
        <h1>求和放大10倍为：{{bigsum}}</h1>
        <h3>我在{{school}}学习{{subject}}</h3>
        <h3 style="color:red">下方组件的总人数是：{{personList.length}}</h3>
        <!-- number修饰符表示获取的n值为数字 -->
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button @click="addNumber(n)">+</button>&nbsp;
        <button @click="subNumber(n)">-</button>&nbsp;
        <button @click="addOdd(n)">当前求和为奇数再加</button>&nbsp;
        <button @click="addWait(n)">等一等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

    export default {
        name:'Count',
        data() {
            return {
                n:1, // 用户选择的数字
            }
        },
        computed:{
            // ...mapState({sum:'sum',school:'school',subject:'subject'}),
            ...mapState(['sum','school','subject','personList']),

            // ...mapGetters({bigsum:'bigsum'}),
            ...mapGetters(['bigsum'])
        },
        methods: {
            ...mapMutations({addNumber:'ADD_NUMBER',subNumber:'SUB_NUMBER'}),
            
            ...mapActions(['addOdd','addWait']),
        },
        mounted(){
            // console.log(this.$store);
        }
    }
    
</script>

<style>

</style>