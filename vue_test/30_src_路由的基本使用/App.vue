<template>
    <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
            <!-- 原始方式实现页面跳转 -->
            <!-- <a class="list-group-item active" href="./about.html">About</a>
            <a class="list-group-item" href="./home.html">Home</a> -->

            <!-- router-link标签实现路由的切换 -->
            <!-- to 路由目标地址 -->
            <!-- active-class 被激活时的样式 -->
            <router-link class="list-group-item" active-class="active" to="/about">About</router-link >
            <router-link  class="list-group-item" active-class="active" to="/home">Home</router-link >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
                <!-- 指定组件的呈现位置 -->
                <router-view></router-view>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Banner from './components/Banner.vue'
    export default {
        name:'App',
        components:{
          Banner
        }
    }
</script>

<style>

</style>