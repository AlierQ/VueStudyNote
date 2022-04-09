// 专门用于创建整个应用的路由器

import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            // 命名路由
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {

                    path:'message',
                    component:Message,
                    children:[
                        {
                            // 使用params传递参数要在path中声明
                            name:'xiangqing',
                            path:'detail', // 占位符
                            component:Detail,
                            // props的第一种写法,值为对象
                            // 该对象中的所有key-value都会以props的形式传递给Detail组件
                            // 缺点:传递的数据都是死数据
                            // props:{
                            //     a:1,
                            //     b:'hello',
                            // }

                            // props的第二种写法,值为布尔值
                            // 若布尔值为真,就会把该路由组件收到的所有params参数,以props的形式传递给Detail组件
                            // 缺点:只能收到params参数
                            // props:true

                            // props的第三种写法,值为函数
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            },
                            // 使用ES6语法的结构赋值,将$route种的query中的id和title都拿出来作为参数
                            // props({query:{id,title}}){
                            //     // id:id可以简写成id
                            //     return {id:id,title}
                            // }
                        }
                    ]
                },
                {
                    path:'news',
                    component:News
                },
            ]
        }
    ]
})