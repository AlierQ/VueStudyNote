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
        <button @click="addNumber">+</button>&nbsp;
        <button @click="subNumber">-</button>&nbsp;
        <button @click="addOdd">当前求和为奇数再加</button>&nbsp;
        <button @click="addWait">等一等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'

    export default {
        name:'Count',
        data() {
            return {
                n:1, // 用户选择的数字
            }
        },
        computed:{
            // 手写计算属性
            // sum(){
            //     return this.$store.state.sum
            // },
            // school(){
            //     return this.$store.state.school
            // },
            // subject(){
            //     return this.$store.state.subject
            // },
    
            // 使用mapState写计算属性
            // 将$store中state中的属性通过函数封装成计算属性，便于引用（对象写法）
            // Es6语法:mapState中的属性拿出来放置在当前对象中
            // ...mapState({
            //     // 原本应该是 'sum':'sum' ,但是属性名可以简写去掉引号
            //     sum:'sum',
            //     school:'school',
            //     subject:'subject'
            // }),
            
            // 数组写法
            // 数组写法生成的计算属性和state中的要得到的数据同名
            ...mapState(['sum','school','subject']),

            // 使用mapGetter写计算属性
            // 将$store中getters中的属性通过函数封装成计算属性，便于引用
            // 对象写法
            // ...mapGetters({
            //     bigsum:'bigsum'
            // })

            // 数组写法
            ...mapGetters(['bigsum'])
        },
        methods: {
            addNumber(){
                this.$store.commit('ADD_NUMBER',this.n)
            },
            subNumber(){
                this.$store.commit('SUB_NUMBER',this.n)
            },
            addOdd(){
                this.$store.dispatch('addOdd',this.n)
            },
            addWait(){
                this.$store.dispatch('addWait',this.n)
            }
        },
        mounted(){
            // console.log(this.$store);
        }
    }
    
</script>

<style>

</style>