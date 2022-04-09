<template>
    <div>
        <h2>Home组件的内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item " active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link  class="list-group-item " active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
        </div>
        <div>
            <!-- include指明要缓存的路由  值为组件名（.vue文件中的name，并非路由名称）！！！ -->
            <keep-alive include="News">  
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Home',
        // beforeDestroy() {
        //     console.log('Home被销毁');
        // },
        // mounted(){
        //     console.log('Home组件挂载完毕');
        // }
    }
</script>

<style>

</style>