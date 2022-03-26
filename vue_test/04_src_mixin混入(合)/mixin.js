// 分别暴露
export const mixin = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    // 如果生命周期钩子出现了冲突，则生命周期钩子每一个都执行（混合会比自己的要先执行）
    mounted(){
        console.log('bbb');
    }
}
// 默认暴露
// export default mixin

// 还可以进行数据的混合
export const mixin2 = {
    data(){
        return {
            x:100,
            y:200
        }
    }
}