<template>
    <div>
        <ul>
            <li :style="{opacity}">欢迎学习Vue</li>
            <li>news001 <input type="text"></li>
            <li>news002 <input type="text"></li>
            <li>news003 <input type="text"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'News', 
        data() {
            return {
                opacity:1
            }
        },                     
        // 路由新生命钩子
        // 被激活的
        activated() {
            this.timer = setInterval(() => {
                this.opacity -= 0.01
                console.log('@');
                if (this.opacity <= 0) {
                    this.opacity = 1
                }
            },16);
        },
        // 失活的
        deactivated() {
            clearInterval(this.timer)
        },
    }
</script>

<style>

</style>