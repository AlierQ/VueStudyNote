<template>
    <div class="container">
        <Search/>
        <List/>
    </div>
</template>

<script>
    // import axios from 'axios'
    // import 引入css文件cli会进行严格的检查，所引用的文件必须都要存在
    // import './assets/css/bootstrap.css'
    import List from './components/List.vue'
    import Search from './components/Search.vue'
    export default {
        name:'App',
        components:{
            List,
            Search
        }
    }
</script>

<style>
    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }

    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }
</style>