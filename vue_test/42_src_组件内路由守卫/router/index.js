// 专门用于创建整个应用的路由器

import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建一个路由器
const router =  new VueRouter({
    routes:[
        {
            // 命名路由
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{ isAuth:true,title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{
                        isAuth:true,
                        title:'消息'
                    },
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            meta:{
                                isAuth:true,
                                title:'详情'
                            },
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            },
                        }
                    ]
                },
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{
                        isAuth:true,
                        title:'新闻'
                    },
                    // 独享路由守卫（只有前置，没有后置）
                    // beforeEnter: (to, from, next) => {
                    //     if(to.meta.isAuth){ //判断是否需要权限
                    //         if(localStorage.getItem('school') === 'lalala'){
                    //             next()
                    //         }
                    //         else{
                    //             alert('学校名不对,无权访问News')
                    //         }
                    //     }
                    //     else{
                    //         next()
                    //     }
                    // }
                },
            ]
        }
    ]
})

// // 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     // to 目标路由
//     // from  源路由
//     // next 放行路由
//     console.log('前置路由守卫',to,from);
//     // 可以使用path，也可使用name
//     // 当目标路径是/home/message和，目标路由名字是xinwen
//     // if(to.name === 'xinwen' || to.path === '/home/message'){

//     // 当配置了meta中的自定义参数之后
//     if(to.meta.isAuth){ //判断是否需要权限
//         if(localStorage.getItem('school') === 'lalala'){
//             next()
//         }
//         else{
//             alert('学校名不对无权访问News和Message')
//         }
//     }
//     else{
//         next()
//     }
// })

// // 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
// // 后置路由守卫没有next
router.afterEach((to,from)=>{
    // console.log('后置路由守卫',to,from);
    document.title = to.meta.title || 'Demo'
})

export default router