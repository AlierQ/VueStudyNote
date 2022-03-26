<template>
    <div class="school">
        <h2>{{name}}</h2>
        <h2>{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return {
                name:'lalalala',
                address:'北京'
            }
        }
    }
</script>

<style>
    .school{
        background-color: #ccc;
    }
</style>