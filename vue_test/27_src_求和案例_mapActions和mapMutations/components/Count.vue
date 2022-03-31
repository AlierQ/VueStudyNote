<template>
    <div>
        <h1>求和为：{{sum}}</h1>
        <h1>求和放大10倍为：{{bigsum}}</h1>
        <h1>我在{{school}}学习{{subject}}</h1>
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
            ...mapState(['sum','school','subject']),

            // ...mapGetters({bigsum:'bigsum'}),
            ...mapGetters(['bigsum'])
        },
        methods: {
            // addNumber(){
            //     this.$store.commit('ADD_NUMBER',this.n)
            // },
            // subNumber(){
            //     this.$store.commit('SUB_NUMBER',this.n)
            // },

            // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
            // mapMutations生成的函数如下
            // f(value){
            //     函数体
            //     use value
            // },
            // 所以如果需要参数则使用mapMutations时要在调用方法的时候加上参数，
            ...mapMutations({addNumber:'ADD_NUMBER',subNumber:'SUB_NUMBER'}),
            //methods中方法名和mutation中方法名相同时也可以使用数组写法


            // addOdd(){
            //     this.$store.dispatch('addOdd',this.n)
            // },
            // addWait(){
            //     this.$store.dispatch('addWait',this.n)
            // }

            // 借助mapAction生成对应的方法，方法中会调用dispatch去联系actions
            // 对象写法
            // ...mapActions({addOdd:'addOdd',addWait:'addWait'}),
            // 数组写法
            ...mapActions(['addOdd','addWait']),
        },
        mounted(){
            // console.log(this.$store);
        }
    }
    
</script>

<style>

</style>