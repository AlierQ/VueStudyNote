<template>
    <!-- 当allNumber不等于0（true）才显示，即没有待做todo的时候就不显示 -->
    <div class="todo-footer" v-if="allNumber">
        <label>
            <input type="checkbox" :checked='isAllChcek' @click="handleCheckAll"/>
        </label>
        <span>
            <span>已完成{{todoNumber}}</span> / 全部{{allNumber}}
        </span>
        <button class="btn btn-danger" @click="deleteDone">清除已完成任务</button>
    </div> 
</template>

<script>
    export default {
        name:'TodoFooter',
        data() {
            return {
            }
        },
        methods: {
            deleteDone(){
                // 调用自定义事件delDoneTodo
                this.$emit('delDoneTodo');
            },
            handleCheckAll(){
                // 调用自定义事件checkAll
                this.$emit('checkAll')
            }
        },
        props:['allNumber','todoNumber','isAllChcek']
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>