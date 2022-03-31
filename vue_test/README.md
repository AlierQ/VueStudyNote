# 笔记

## ref属性
    1.被用来给元素或子组件注册引用信息(id的代替者)
    2.应用在html标签上获取的是真实Dom,应用在组件标签上是组件实例对象(vc)
    3.使用方式:
        打标识:<h1 ref='xxx'>...</h1> 或者 <School ref='xxx'></School>
        获取:this.$refs.xxx

## 配置项props
    功能:让组件接受外部传过来的数据
        (1).传递数据:
            <Dome name="xxxx"/>
        (2).接收数据:
            第一种方式(只接收):
            props:['name','age',....]
            第二种方式(限制类型)
            props:{
                name:String,
                age:Number
            }
            第三种方式(限制类型 限制必要性 指定默认值):
            props:{
                name:{
                    type:String,    // 类型
                    required:true,  // 必要性
                    default:'老王'  // 未传参默认值
                }
            }
    备注: props是只读的,Vue底层会检测你对props的修改,如果进行了修改,就会发出警告,若业务需要确实需要修改,那么清负值props的内容到data中一份,然后去修改data中的数据

## mixin(混入)
    功能：可以把多个组件共用配置提取成一个混入对象
    使用方式：
        第一步定义混合，例如：
            {
                data(){....},
                methods:{....}
                ....
            }
        第二步使用混入，例如：
            (1).全局混入：Vue.mixin(xxx)
            (2).局部混入：mixins:['xxx']

## 插件

    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
    定义插件：
        对象.install = function (Vue, options){
            // 1.添加全局过滤器
            Vue.filter(....)
    
            // 2.添加全局指令
            Vue.directive(....)
    
            // 3.配置全局混入(合)
            Vue.mixin(...)
    
            // 4.添加实例方法、实例属性
            Vue.prototype.$myMethod = funciton () {...}
            Vue.prototype.$myProperty = xxxx
        }
    
    使用插件：
        Vue.use(插件名)

## scoped样式
    作用：让样式在局部生效，防止冲突
    写法：<style scoped>

## 总结
    1、组件化编码流程
        (1).拆分静态组件：租价要按照功能点拆分，命名不要与html元素冲突
        (2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件再用：
            1).一个组件在用的放在组件自身即可
            2).一些组件在用:放在他们共同的父组件上(状态提升)
        (3)实现交互:从绑定事件开始
    2、props适用于：
        (1).父组件 ==> 子组件 通信
        (2).子组件 ==> 父组件 通信 (要求父组件先给子组件一个函数)
    3、使用v-model要注意: v-model绑定的值不能是props传过来的值，因为props是不可修改的！
    4、props传过来的若是对象类型的值，修改对象中的属性Vue不会报错，但是不推荐这样做

## webStorage
    1.存储内容大小一般支持5MB左右
    2.浏览器能够通过Window.localStorage和Window.sessionStorage属性来实现本地存储机制
    3.相关API：
        1.setItem(key,value)
            写入数据，添加/修改键值对
        2.getItem(key)
            读取数据，根据键读取对应的值，不存在返回空
        3.removeItem(key)
            删除数据，根据键删除对应的键值对
        4.key(index)
            根据索引获取对应的键
        5.clear()
            清空数据
    4.备注：
        1.SessionbStorage存储内容会随着浏览器窗口关闭而消失
        2.LocalStorage存储的内容，需要手动清除才会小时
        3.xxxxxStorage.getItem(xxx)如果对应的value获取不到会返回null
        4.JSON.parse(null)的结果仍然是null
        5.对象数据存储到Storage中要先使用JSON.stringify(Object)转换成JSON数据

## 组件的自定义事件
    1.一种组件间通信的方式,适用于 子组件 ===> 父组件
    2.使用场景: A是父组件,B是子组件,B想给A传数据,那么就要给A中绑定B的自定义事件(事件的回调在A中)
    3.绑定自定义事件:
        1.第一种方式,在父组件中:<Demo @zezeze="test"> 或 <Demo v-on:zezeze="test">
        2.第二种方式,在父组件中:
            <Demo ref="demo">
            .......
            mounted(){
                // 给xxx组件对象实例绑定zezeze自定义事件,回调函数是test
                this.$refs.xxx.$on('zezeze',this.test)
            }
        3.若想让自定义事件只能触发一次,可以使用once修饰符,或者$once方法
        4.触发自定义事件: this.$emit('zezeze',数据)
        5.解锁自定义事件: this.$off('zezeze') 解锁多个的时候 this.$off(['事件1','事件2'])
        6.组件上也可以绑定原生事件,需要使用native,如果不使用native就会被当作是自定义事件
        7.注意: 通过this.$refs.xxx.$on('zezeze',回调) 绑定自定义事件式,回调要么配置要methods中,要么使用箭头函数,否则this的指向会出现问题

## 全局事件总线(GlobalEventBus)
    1.一种组件间通信方式，适用于任意组件间的通信
    2.安装全局事件总线
        new Vue({
            ......
            beforeCreate(){
                Vue.prototype.$bus = this //安装事件总线，$bus就是当前应用的Vm
            },
            ......
        })
    3.使用事件总线：
        1.接收数据：A组件想接收，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。
            methods(){
                //回调函数
                demo(data){......}
            }
            mounted(){
                this.$bus.$on('xxxx',this.demo)
            }
        2.提供数据：this.$bus.$emit('xxx',数据)
    4.最好在beforeDstroy钩子中，用$off去解绑当前组件所用到的事件

## 消息的订阅与发布
    1.一种组件间通信的方式，适用于任意组件间通信
    2.使用步骤：
        1.安装pubsub：npm i pubsub-js
        2.引入：import pubsub from 'pubsub-js'
        3.接收数据：
            methdos:{
                demo(msgName,data){
                    .....
                }
            }
            ....
            mounted(){
                this.pubid = pubsub.subscribe('xxxx',this.demo) //订阅消息
            }
        4.提供数据：pubsub.publish('xxxx',this.demo)
        5.最好在beforeDestroy钩子中，用pubsub.unsubscribe(pubid)去取消订阅

## Vue封装的过度和动画

​	1、作用：在插入、更新或者移除DOM元素时 在可是的时候给元素添加样式类名

​	2、图示

<img src="C:\Users\10293\AppData\Roaming\Typora\typora-user-images\image-20220326213404361.png" alt="image-20220326213404361" style="zoom: 67%;" />

​	3、写法：

​		1.准备好样式：

​				元素进入样式：

​					1.v-enter：进入的起点

​					2.v-enter-active：进入过程中  (只用动画写可以只用它)

​					3.v-enter-to：进入的终点

​				元素离开样式

​					1.v-leave：进入的起点

​					2.v-leave-active：进入过程中  (只用动画写可以只用它)

​					3.v-leave-to：进入的终点

​		2.使用<transition>包裹要过度的元素，并配置name属性：

```html
<transition name="hello">
	<h1 v-show="isShow">你好啊！</h1>
</transition>
```

​		3.备注：若有多个元素需要过度，则需要使用<transition-group>，且每个元素都要指定key值

## Vue脚手架配置代理

#### 方法一

在vue.config.js中添加如下配置

```js
devServer: {
    proxy: 'http://localhost:5000'
}
```

说明：

​	1、优点：配置简单，请求资源时直接发给前端（8080）即可

​	2、缺点：不能配置多个代理，不能灵活控制请求是否走代理

​	3、工作方式：若按照上诉配置配置代理，当请求前端不存在的资源时，请求才会转发给服务器（有钱匹配前端资源）

#### 方法二

编写vue.config.js配置具体代理规则：

```js
devServer: {
    proxy: {
      // 代理一
      '/api': { // 请求前缀:用于灵活控制是否走代理,走代理即加上
        target: 'http://localhost:5000', // 目标服务器
        // 清除请求前缀
        pathRewrite:{'^/api':''},
        ws: true, // 用于支持websocket
        changeOrigin: true // 用于控制请求头中的host值
      },
      // 代理二
      '/foo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/foo':''},
      }
   }
}
/*
	changeOrigin设置为true时,服务器收到的请求头中的host为：localhost:5000
	changeOrigin设置为false时,服务器收到的请求头中的host为：localhost:8080
	默认值为true
*/
```

说明：

​	1、优点：可以配置多个代理，且可以灵活的控制请求是否走代理

​	2、缺点：配置略微繁琐，请求资源时必须加前缀

## 插槽

​	1、作用：让父组件可以向子组件指定位置插入html，也是组件间通信的方式，适用于<span style="color:red">**父组件 ===> 子组件**</span>。

​	2、分类：默认插槽、具名插槽、作用域插槽

​	3、使用方式：

​		1、默认插槽	

```html
父组件中：
	<Category>
        <div>html结构</div>
	</Category>
子组件中：
	<template>
        <div>
            <!-- 定义一些插槽，等待组件使用者进行填充 -->
            <slot>这里是一个插槽</slot>
        </div>
    </template>
```

​		2、具名插槽

```html
父组件中：
<Category>
    <!-- 依靠slot属性来指定要放置的插槽 -->
    <div slot="center">
        html结构
    </div>
    <div slot="footer">
        html结构
    </div>
</Category>
子组件中：
<template>
    <div>
        <!-- 多个插槽 -->
        <slot name="center">插槽默认内容</slot>
        <slot name="footer">插槽默认内容</slot>
    </div>
</template>
```

​		3、作用域插槽

​			1、理解：<span style="color:red">数据在组件自身，但是数据生成的结构需要组件的使用者来决定。</span>（games数据在Cetagory组件中，但使用数据所遍历出来的结构由App组件决定）

​			2、具体编码：

```html
父组件中：
<Category title="游戏">
    <!-- 作用域插槽的使用者必须要使用template包裹待使用数据并且要使用scope属性去接收数据
-->
    <template scope="lalala">
        <!-- {{lalala}} scope接收的数据是一个对象(可能有多个数据)，里面包含着一个数组，数组名就是插槽传递的数据的名字-->
        <ul>
            <li v-for="(item,index) of lalala.games" :key="index">{{item}}</li>
        </ul>
        <h4>这是作用域插槽传递过来的第二个参数x的值：{{lalala.x}}</h4>
    </template>

</Category>
<Category title="游戏">
    <!-- 支持Es6中的结构赋值，从多个对象中只拿自己需要的数据 -->
    <template scope="{games}">
        <ol style="color:red">
            <li v-for="(item,index) of games" :key="index">{{item}}</li>
        </ol>
    </template>
</Category>
<Category title="游戏">
    <!-- 还可以使用slot-scope去接收数据 -->
    <template slot-scope="{games}">
        <h4 v-for="(item,index) of games" :key="index">{{item}}</h4>
    </template>
</Category>

子组件中：
<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 默认插槽 -->
        <!-- 将games数据传递过去 -->
        <slot :games="games" x="hallo">这里是一个插槽</slot>
    </div>
</template>
<script>
    export default {
        name:'Category',
        props:['title'],
        data() {
            return {
                games:['红色警戒',' 穿越火线','劲舞团','超级玛丽']
            }
        }
    }
</script>
```

## Vuex

### 1、概念

​	在Vue中实现集中式状态（数据管理）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写）。也是一种组件间通信的方式，且适用于任意组件间通信。

### 2、何时使用？

​	多个组件需要共享时

### 3、搭建vuex环境

​	1、创建文件：src/store/index.js

```js
// 该文件用于创建vuex中最为核心的store

// 要注意Vuex的版本问题！！！

// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'


// 准备actions——用于响应组件中的动作
const actions = {}

// 准备mutations——用于操作数据（state）
const mutations = {}

// 准备state——用于存储数据
const state = {}

// 使用vuex
Vue.use(Vuex)

// 创建store并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})


```

​	2、在main.js中创建vm时传入store配置项

```js
......
// 引入store
import store from './store'
......

// 创建vm
new Vue({
  render: h => h(App),
  // 引入并且使用vuex插件之后，再配置store就可以在所有的组件实例对象上看到$store
  store
}).$mount('#app')

```

### 4、基本使用

​	1、初始化数据、配置actions、配置mutations、操作文件store.js

```js
// 该文件用于创建vuex中最为核心的store

// 要注意Vuex的版本问题！！！

// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'


// 准备actions——用于响应组件中的动作
const actions = {
    // 没有业务逻辑的可以直接使用commit进行调用mutation
    // addNumber(context,value){
    //     // console.log("加号action函数被调用了",context,value);
    //     context.commit("ADD_NUMBER",value)
    // }, 
    // subNumber(context,value){
    //     context.commit("SUB_NUMBER",value)
    // },
    addOdd(context,value){
        // 业务逻辑 ：奇数再加
        if(context.state.sum%2)
            context.commit("ADD_NUMBER",value)
    },
    addWait(context,value){
        // 业务逻辑：延时500ms再加
        setTimeout(()=>{
            context.commit("ADD_NUMBER",value)
        },500)
    }
}

// 准备mutations——用于操作数据（state）
const mutations = {
    ADD_NUMBER(state,value){
        state.sum += value
    },
    SUB_NUMBER(state,value){
        state.sum -= value
    }
}

// 准备state——用于存储数据
const state = {
    sum:0 // 当前的和
}

// 使用vuex
Vue.use(Vuex)

// 创建store并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
```

​	2、组件中读取vuex中的数据：$store.state.sum

​	3、组件中修改vuex中的数据：$store.dispatch('actions中的方法名',数据)或$store.commit('actions中的方法名',数据)

> 备注：若没有网络请求或者其他业务逻辑，组件中也可以越过actions，即不再写dispatch，直接编写commit

### 5、getters的使用

​	1、概念：当state中的数据需要经过加工够再使用时，可以使用getters加工

​	2、在store.js中追加getters配置

```js
......
const getters = {
    bigsum(state){
        return state.sum*10
    }
}

// 创建store并暴露store
export default new Vuex.Store({
	......
    getters
})

```

​	3、组件中读取数据：$store.getter.bigsum

> 注意：作用于data中的computed相似，通过return返回属性的值

### 6、四个map方法的使用

1、mapState方法：用于帮助我们映射state中的数据为计算属性

```js
computed:{
    // 借助mapState生成计算属性，sum、school、subject（对象写法）
	...mapState({sum:'sum',school:'school',subject:'subject'}),
        
    // 借助mapState生成计算属性，sum、school、subject（对象写法）
	...mapState(['sum','school','subject'])
    
}
```

2、mapGetters方法：用于帮助我们映射getters中的数据作为计算属性

```js
computed:{
    // 借助mapGetters生成计算属性，bigsum（对象写法）
	...mapGetters({bigsum:'bigsum'}),
        
    // 借助mapGetters生成计算属性，sum、school、subject（对象写法）
	...mapGetters(['bigsum'])
}
```

3、mapActions方法：帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数

```js
//靠mapActions生成：addNumber、subNumber，对象写法
...mapMutations({addNumber:'addNumber',subNumber:'subNumber'}),

// 数组写法：
...mapMutations(['addNumber','subNumber']), 
```

4、mapMutaions方法：帮助我们生成与mutations对话的方法，即：包含$store.commit(xxx)的函数

```js
//靠mapMutations生成：addOdd、addWait，对象写法
...mapMutations({addOdd:'addOdd',addWait:'addWait'}),

// 数组写法：
...mapMutations(['addOdd','addWait']), 
```

> 注意：mapActions和mapMutations使用时，若需要传递参数，在模板中绑定事件时传递好参数，否则参数就是事件对象