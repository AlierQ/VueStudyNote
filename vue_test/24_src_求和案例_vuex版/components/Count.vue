<template>
    <div>
        <h1>求和为：{{$store.state.sum}}</h1>
        
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
    export default {
        name:'Count',
        data() {
            return {
                n:1, // 用户选择的数字
            }
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
            console.log(this.$store);
        }
    }
    
</script>

<style>

</style>