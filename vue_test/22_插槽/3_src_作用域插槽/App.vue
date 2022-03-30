<template>
    <div class="container">
        <Category title="游戏">
            <!-- 作用域插槽的使用者必须要使用template包裹待使用数据 
                 并且要使用scope属性去接收数据
            -->
            <template scope="lalala">
                <!-- {{lalala}} scope接收的数据是一个对象(可能有多个数据)，里面包含着一个数组，数组名就是插槽传递的数据的名字-->
                <ul>
                    <li v-for="(item,index) of lalala.games" :key="index">{{item}}</li>
                </ul>
                <h4>这是作用域插槽传递过来的第二个参数x的值：{{lalala.x}}</h4>
            </template>
            
        </Category>
        <Category title="游戏">
            <!-- 支持Es6中的结构赋值，从多个对象中只拿自己需要的数据 -->
            <template scope="{games}">
                <ol style="color:red">
                    <li v-for="(item,index) of games" :key="index">{{item}}</li>
                </ol>
            </template>
        </Category>
        <Category title="游戏">
            <!-- 还可以使用slot-scope去接收数据 -->
            <template slot-scope="{games}">
                <h4 v-for="(item,index) of games" :key="index">{{item}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category.vue'
    export default {
        name:'App',
        components:{
            Category
        }
    }
</script>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }
</style>