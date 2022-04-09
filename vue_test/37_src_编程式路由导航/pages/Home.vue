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
            <router-view></router-view>
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