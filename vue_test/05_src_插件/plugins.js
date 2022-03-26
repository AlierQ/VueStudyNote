const obj = {
    install(Vue){
        // console.log('@@@install',Vue)

        // 定义全局过滤器

        // 定义全局指令

        // 定义全局混入

        // 给Vue原型上添加一个方法（组件实例对象和vm都可以使用）
        Vue.prototype.hello = ()=>{alert('你好啊')}
    }
}

export default obj