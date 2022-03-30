<template>
    <div class="container">
        <!-- 插槽 -->
        <Category title="美食">
            <!-- 依靠slot属性来指定要放置的插槽 -->
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJ1q0.jpg" alt="">
            <div class="footer" slot="footer" >
                <a href="https://www.baidu.com">美食分类</a>
            </div>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(item,index) of games" :key="index">{{item}}</li>
            </ul>
            <div slot="footer" class="footer">
                <a href="https://www.baidu.com">分类</a>
                <a href="https://www.baidu.com">分类</a>
                <a href="https://www.baidu.com">分类</a>
            </div> 
        </Category>
        <Category title="电影">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJ1q0.jpg" alt="">
            <!-- 当有很多内容的时候可以使用template进行包裹然后放入插槽 -->
            <!-- <template slot="footer"> -->
            <!-- template最新写法 v-slot:footer (只能搭配template使用 vue版本是2.6+)-->
            <template v-slot:footer>
                <div class="footer">
                    <a  href="https://www.baidu.com">电影分类</a>
                    <a  href="https://www.baidu.com">电影分类</a>
                    <a  href="https://www.baidu.com">电影分类</a>
                </div>
                <h4>欢迎前来观影</h4>
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
        },
        data() {
            return {
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['红色警戒',' 穿越火线','劲舞团','超级玛丽'],
                films:['《教父》','《拆弹专家》','《你好，李焕英》','《肖申克的救赎》']
            }
        },
    }
</script>

<style>
    .container,.footer{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }
</style>