<template>
    <div>
        <h1>求和为：{{sum}}</h1>
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
                sum:0 // 当前的和
            }
        },
        methods: {
            addNumber(){
                this.sum += this.n;
            },
            subNumber(){
                this.sum -= this.n;
            },
            addOdd(){
                if(this.sum%2)
                    this.sum += this.n;
            },
            addWait(){
                setTimeout(()=>{
                    this.sum += this.n;
                } ,500)
            }
        },
    }
    
</script>

<style>

</style>