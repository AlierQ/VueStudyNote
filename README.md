

# Vue学习笔记

一套构建用户页面的渐进式javascript框架

## 特点

1、采用`组件化`的模式，提高代码复用率、且让代码更好维护

2、`声明式`编码，让编码人员无需直接操作DOM，提高开发效率

3、使用虚拟DOM+优秀的Diff算法，尽量复用DOM节点

## 初识Vue

1、想让:Vue工作，就必须创建一个Vue实例， 且要传入一个配置对象；

2、容器里的代码依然符合html规范。只不过混入了些特殊的Vue语法；

3、容器里的代码被称为[Vue模板]；

4、Vue实例和容器的关系只能是一对一！

5、{{XXX}}里面要写js的表达式（并非js代码，js表达式通常是能够产生值的）且XXX能够读取到data中所有的数据

6、一但data中的数据发生变化，那么模板中用到该数据的地方也会相应的改变

```html
<div id="root">
    <!-- 插值语法 -->
    <h1>Hello {{name}}!</h1>
</div>

<script type="text/javascript">
    //关闭开发者提示
    Vue.config.productionTip = false;

    // 创建Vue实例
    new Vue({
        el:'#root', //element元素，用于指定当前Vue实例为那个容器服务，值通常为CSS选择器字符
        data:{  // data中用于存储数据，数据供指定的容器去使用，值暂时写成一个对象
            name:'World111'
        },
    });
</script> 
```

## 模板语法

### 插值语法

功能：用于解析标签体内容

写法：

```html
<h1>插值语法</h1>
<h3>你好，{{name}}</h3>
<!--使用{{js表达式}}的形式引入js表达式-->
```

### 指令语法

功能：用于解析标签（包括：标签属性、标签体内容、绑定事件......）

```html
<a v-bind:href="url" :x="a">点我去百度</a>
<!-- 加了v-bind后Vue会将属性后面的内容变成js表达式去执行
	v-bind可以给标签中任意的属性去绑定值
	可以简写为 ":"
-->
```

备注：Vue中有很多的指令，且形式都是 v-??? ,此处用v-bind举个例子

## 数据绑定

Vue中有2种数据绑定的方式:

1、单向绑定(v-bind):数据只能从data流向页面。

2、双向绑定(v-model):数据不仅能从data流向页面，还可以从页面流向data.

备注:
1、双向绑定一般 都应用在表单类元素上(如: input、 select等 ) 

2、v- model :value可以简写为v-model, 因为v-mode1默认收集的就是value值。

```html
单向数据绑定<input type="text" v-bind:value="name">
<!-- 实例中数据改变容器中的数据也会改变，但是容器中数据改变，实例对象中数据不会改变
这就称为单向数据绑定
v-bind是单项绑定
-->
<br>
双向数据绑定<input type="text" v-model:value="name">
<!-- 容器中的数据改变实例中的数据也改变，称之为双向绑定的
v-model是双项绑定    
v-model只能运用在表单类元素中
-->
```

简写方式：

```html
单向数据绑定<input type="text" :value="name">  <!--v-bind简写成':'-->
双向数据绑定<input type="text" v-model="name">  <!--v-model直接可以替代value属性-->
```

## el和data的两种写法

el的第一种写法

```js
new Vue({
    el:'#root',// el第一种写法
    data:{     
    }
});
```

el的第二种写法

```js
const v = new Vue({
	// el:'#root',
	data:{
		}
});  
// 为实例对象指定容器
v.$mount('#root');  // el第二种写法
```

data的第一种写法

```js
new Vue({
    el:'#root',
    // data的第一种写法：对象式
    data:{
        name:'哈哈哈'
    }
});
```

data的第二种写法

```js
new Vue({
    el:'#root',
    // 对象的第二种写法：函数式
    // 组件必须要用函数式
    data:function(){
        // 可以简写成 data(){}
        // 此处的 this 是 Vue实例对象
        // 此处不能写成箭头函数 data:()=>{} 箭头函数没有自己的this 所以箭头函数的this是window
        return{
            name:'哈哈哈'
        }
    }
});
```

注意：由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是vue实例了

## MVVM模型

1、M：模型（Model）：对应data中的数据

2、V：视图（View）：模板

3、VM：视图模型（ViewModel）：Vue实例对象

<img src="C:\Users\10293\AppData\Roaming\Typora\typora-user-images\image-20220303225020215.png" alt="image-20220303225020215" style="zoom: 50%;" />

注意：

​	1、data中的所有属性，最后都出现在VM身上。

​	2、VM身上的所有属性及Vue原型上的所有属性，在Vue模板中都可以直接使用。

## 数据代理

### Object.defineProperty()

```js
Vue.config.productionTip=false;
    let number = 18;
    let person = {
        name:'张三',
        sex:'男',
        // age:18
    }
    // 三个参数： 给那个对象添加属性  添加属性名 配置项
    // Object.defineProperty 添加的属性不参与枚举（遍历）
    Object.defineProperty(person,'age',{
        // value:18,
        // enumerable:true,  // 控制属性是否可以枚举，默认值是false
        // writable:true,  // 控制属性值是否可以被修改，默认值是false
        // configurable:true,  //控制属性是否可以被删除，默认值是false

        // 当有人读取person的age属性时，get函数（getter）会被调用，且返回值时age的值
        // 可以简写get()
        get:function(){
            return number
        },

        // 当有人修改person的age属性时，set函数（setter）就会被调用，参数是age的值
        set:function(value){
            console.log('有人修改了age，且值是'+value);
            // 因为age来自于number，所以修改时也要修改number的值，否则age的值不改变
            number = value;
        }
    });

    // for遍历
    // for(let key in person){
    //     console.log(person[key]);
    // }

    // Object.keys()方法可以将对象中所有的属性名都提取出来
    // console.log(Object.keys(person));
    console.log(person);
```

### 数据代理定义

```js
let obj1 = {x:100};
let obj2 = {y:200};
// 绑定obj2对象,为其添加与obj1相同的x属性
Object.defineProperty(obj2,'x',{
    // 使用obj1中的x属性来设置obj2中的x属性
    get(){
        return obj1.x;
    },
    // 当obj2中的x属性被修改之后修改obj1中的x属性
    set(value){
        obj1.x = value;
    }
});
```

### Vue数据代理

<img src="C:\Users\10293\AppData\Roaming\Typora\typora-user-images\image-20220304111310143.png" alt="image-20220304111310143" style="zoom: 33%;" />

1、Vue中的数据代理：

​	通过vm对象来代理data对象中的属性（getter读/setter写）

2、Vue中的数据代理的好处：

​	更方便操作data中的数据

3、基本原理：

​	通过Object。dafineProperty()把data对象中的所有属性添加到VM上

​	为每一个添加到vm上的属性，都指定一个getter/setter。

​	在getter/setter内部去操作（读/写）data中对应的属性

## 事件处理

### 事件的基本使用

1、使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名;

2、事件的回调需要配置在methods对象中，最终会在vm上;

3、methods中配置的函数，不要用箭头函数!否则this就不是vm了;

4、methods中配置的函数，都是被Vue所管理的函数，this的指向是vm或组件实例对象;

5、@click="demo"和@click=" demo($event)"效果一致， 但后者可以传参;

### 事件修饰符

​    Vue中的事件修饰符: 

​      1.prevent:阻止默认事件(常用);

​      2.stop:阻止事件冒泡(常用);

​      3.once: 事件只触发1次 (常用);

​      4.capture:使用事件的捕获模式;

​      5.self:只有event. target是当前操作的元素是才触发事件;

​      6.passive:事件的默认行为立即执行，无需等待事件回调执行完毕; 

语法：

```
@事件.事件修饰符
```

注意：修饰符可以连续写

### 键盘事件

1.Vue中常用的按键别名: 

​        回车 => enter

​        删除 => delete (捕获“删除”和退格"健)

​        退出 => esc

​        空格 => space

​        换行 => tab  要使用keydown,否则tab就会先移除焦点,则没法进行事件触发

​        上 => up

​        下 => down

​        左 => left

​        右 => right

2.Vue未提供别名的按键。可以使用按键原始的key值去绑定。

​        e.key就可以得到按键的名称

​        多个单词的按键名称如CapsLock,要写成caps-lock

3.系统修饰健(用法特殊) : ctrl alt shift meta(win键)

​        (1).配合keyup使用:按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。

​        (2).配合keydown使用:正常触发事件。

4.也可以使用keyCode去指定具体的按键(不推荐)

5，Vue.config.keyCodes.自定义键名=按键编码。可以去定制按健别名

语法

```
@keyup.键码
@keydown.键码
```

注意：按键事件后面的键码也是可以进行连写的，连写相当于组合键

## 计算属性

1.定义: 要用的属性不存在，要通过已有属性计算得来。

2.原理:底层借助了Objcet . defineproperty方法提供的getter和setter. 

3.get函数什么时候执行? （有缓存）

​	(1).初次读取时会执行一次 。

​	(2).当依赖的数据发生改变时会被再次调用。

4.优势:与methods实现相比， 内部有缓存机制(复用)，效率更高，调试方便。

5.备注：

​	1.计算属性最终会出现在Vm.上，直接读取使用即可。

​	2.如果计算属性要被修改，那必须写set函数去响应修改，且set中 要引起计算时依赖的数据发生变化

## 监视属性

1、当被监视的属性发生变化时，回调函数自动调用，进行相关操作

2、监视的属性必须存在

3、监视的两种写法：

​	（1）、new Vue时传入watch配置

​	（2）、通过vm.$watch监视

### 深度监视

​	1、Vue中的watch默认不监测对象内部的值的改变（默认只监视一层）

​	2、配置deep：true可以监测对象内部值改变（监视多层）

备注：

​	1、Vue自身可以监测对象内部值得改变，但Vue提供得watch默认不可以！（deep:true开启）

​	2、使用watch时根据数据得具体结构，决定是否采用深度监视。

## computed和watch之间的区别

1、computed能完成的功能，watch都可以完成

2、watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。

两个重要的小原则：

​	1、所有被Vue管理的函数，最好写成普通函数，这样this的指向才是vm或者组件实例对象

​	2、所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等），最好写成箭头函数，这样this的指向才是vm或者组件实例对象。

## 绑定样式

### Vue绑定css样式

HTML：

```html
<!-- :class 表示class属性要进行动态指定了 -->
<!-- 字符串写法 适用于：样式的类名不确定，需要动态指定 -->
<div class="basic" :class = "mood" @click="changeMood">{{name}}</div>

<!-- 数组写法 适用于：要绑定的样式个数不确定，名字也不确定 -->
<div class="basic" :class = 'classArr'>{{name}}</div>

<!-- 对象写法 适用于：要绑定的样式个数确定，名字也确定，但是要动态界定用不用 -->
<div class="basic" :class = 'classObj'>{{name}}</div>
```

Vue：

```js
const vm = new Vue({
    el:'#root',
    data:{
        name:'lalala',
        mood:'normal',
        classArr:['lalala1','lalala2','lalala3'],
        classObj:{
            // false表示不应用lalala1
            lalala1:false,
            // true表示应用lalla2
            lalala2:true,
            lalala3:false
        },
        fsize:40,
        styleObj:{
            backgroundColor:'#ccc'
        },
        styleObj2:{
            border:'5px solid #666'
        }
    },
    methods: {
        changeMood(){
            // 展示happy
            this.mood = 'happy'
            // 随机展示心情
            const arr = ['normal','happy','bad'];
            // Math.random生成的随机数（0-1）包含0但是不包含1
            console.log(Math.floor(Math.random()*3));
            this.mood = arr[Math.floor(Math.random()*3)];
        }
    },
});
```



### Vue绑定style样式

HTML：

```html
<!-- :style 表示style属性要进行动态指定了 -->
<div class="basic" :style = "{fontSize: fsize+'px'}">{{name}}</div>

<!-- 升级写法 -->
<div class="basic" :style = "styleObj">{{name}}</div>

<!-- style数组写法 -->
<div class="basic" :style = "[styleObj,styleObj2]">{{name}}</div>
```

Vue：

```js
const vm = new Vue({
    el:'#root',
    data:{
        name:'lalala',
        mood:'normal',
        fsize:40,
        styleObj:{
            backgroundColor:'#ccc'
        },
        styleObj2:{
            border:'5px solid #666'
        }
    }
});
```

## 条件渲染

### v-if

​	写法:

​		(1).v-if="表达式”

​		(2).v-else-if="表达式”

​		(3).v-else="表达式”

​	适用于:切换频率较低的场景。

​	特点:不展示的DOM元素直接被移除。

​	注意: v-if可以和:v-else-if、 v-else-起使用， 但要求结构不能被“打断”。

### v-show

​	写法:

​		v-show="表达式"

​	适用于:切换频率较高的场景。

​	特点:不展示的DOM元素未被移除，仅仅是使用样式隐藏掉

​	注意:使用v-if的时，元素可能无法获取到，而使用v-show定可以获取到。

### template

template充当临时容器

```html
<!-- 
	template可以充当容器
	在页面生成之后会自动消失
	但是template只能配合v-if使用，不能和v-show一起使用 
-->
<template v-if="n === 1">
    <h2>1</h2>
    <h2>2</h2>
    <h2>3</h2>
</template>
```

## 列表渲染

v-for：

​	1、用于展示列表数据

​	2、语法：v-for="(item,index) in xxx"  :key="yyy"

​	3、可遍历：数组、对象、字符串（用的少）、指定次数（用的少）

### key作用与原理

![image-20220314121420216](C:\Users\10293\AppData\Roaming\Typora\typora-user-images\image-20220314121420216.png)

![image-20220314123047704](C:\Users\10293\AppData\Roaming\Typora\typora-user-images\image-20220314123047704.png)

面试题: react、 vue中的key有什么作用? (key的内部原理)

​	1、虚拟DOM中key的作用:

​		key是虚拟DOM对象的标识。当状态中的数据发生变化时，Vue会根据[新数据]生成【新的虚拟DOM】随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：
​	2、对比规则：
​		(1)、旧虚拟DOM中找到了与新虚拟DOM相同的key：

​			若虑拟DOM中内容没变，直接使用之前的真实DOM!

​			若虑拟DOM中内容变了，则生成新的真实DOM.随后换掉页面中之前的真实DOM。

​		(2)、旧虚拟DOM中未找到与新虚拟DOM相同的key：

​			创建新的真实DOM，随后渲染到页面。

​	3、用index作为key可能会引发的问题:

​		1、若对数据进行:逆序添加、逆序删除等破坏顺序操作:
​				会产生没有必要的真实DOM更新  ==>  界面效果没问题，但效率低。
​		2、如果结构中还包含输入类的DOM:
​				会产生错误DOM更新  ==>  界面有问题。

​	4、开发中如何选择使用key？

​		1、最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值

​		2、如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的

## set方法

### Vue.set()

![image-20220316093717607](C:\Users\10293\AppData\Roaming\Typora\typora-user-images\image-20220316093717607.png)

### vm.$set()

![image-20220316093829521](C:\Users\10293\AppData\Roaming\Typora\typora-user-images\image-20220316093829521.png)

注意：set方法只能对vm中的**对象属性**进行追加属性（即为不能够向vm、vm._data追加数据）

​			目标对象不能是一个 Vue 实例或 Vue 实例的根数据对象。

## Vue监视数据的原理

Vue监视数据的原理:

​	1、vue会监视data中所有层次的数据。

​	2、如何监测对象中的数据?

​		通过**setter**实现监视，并且要在new Vue时就传入要监测的数据.

​			(1)、对象中后追加的属性，Vue默认不做响应式处理

​			(2)、如需给后添加的属性做**响应式**，请使用如下API:

​				Vue . set(target.propertyName/index, value) 或

​				vm. $set(target.propertyName/index. value)

​	3、如何监测数组中的数据?

​		通过包裹数组更新元素的方法实现，本质就是做了两件事:

​			(1)、调用原生对应的方法对数组进行更新。

​			(2)、重新解析模板，进而更新页面

​	4、在Vue修改数组中的某个元素定要用如 下方法:

​		1、使用这些API:push()、pop()、 shift()、 unshift()、 splice()、 sort()、 reverse()

​		2、Vue.set()或vm.$set()

​	特别注意: Vue.set() 和vm.$set() 不能给vm或vm的根数据对象(_data)添加属性! ! !

## 收集表单数据

<input type="text"/>.则v- model收集的是value值，用户输入的就是value值。

<input type="radio"/> 则v-model收集的是value值， 要给标签配置value值。

<input type=" checkbox"/>

​	1、没有配置input的value属性。那么收集的就是checked (勾选or未勾选。是布尔值)

​	2、配置input的value属性:

​		(1)、v-model的初始值是非数组，那么收集的就是checked (勾选or未勾选，是布尔值)

​		(2)、v-model的初始值是数组，那么收集的就是value组成的数组

备注: v-model的 三个修饰符:

​	**lazy**:失去焦点再收集数据

​	**number**:输入字符串转为有效的数字

​	**trim**: 输入首尾空格过滤

## 指令

### 常用指令

**v-bind** : 单向绑定解析表达式，可简写为 :XXX

**v-model** : 双向数据绑定

**v-for** : 遍历数组/对象/字符串

**v-on** : 绑定事件监听，可简写为 @事件

**v-if** : 条件渲染(动态控制节点是否存存在)

**v-else** : 条件渲染(动态控制节点是否存存在)

**v-show** : 条件渲染(动态控制节点是否展示)

**v-text指令**：

​	1、作用：向其所在的节点中渲染文本内容

​	2、与插值语法的区别：v-text会替换节点中的内容，{{xx}}则不会

**v-html指令**：

​	1、作用：向指定节点中渲染包含html结构的内容。

​	2、与插值语法的区别：

​		(1)、v-html会替换掉节点中所有的内容，{{不会}}

​		(2)、v-html可以识别html结构

​	3、严重注意：

​		(1)、在网站上动态渲染任意html都是非常危险的，容易导致xss攻击。

​		(2)、一定要在可信的内容上使用v-html，永远不要在用户提交内容上使用

**v-cloak指令**：

​	1、本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删除掉v-cloak属性

​	2、使用css配合v-cloak可以解决网速慢时，页面战术出{{XXX}}的问题

**v-once指令**：

​	1、v-once所在节点在初次动态渲染之后，就视为静态内容了

​	2、以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能

**v-pre指令**：

​	1、跳过其所在节点的编译过程

​	2、可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译

### 自定义指令

一、定义语法:

​	(1)、局部指令:

​		new Vue({                                                         new Vue({

​	    	    directives:{指令名:{配置对象}}       或               directives:{指令名:function()}

​		})                                  									  })

​	(2)、全局指令:

​		Vue. directive(指令名，配置对象)     或       Vue . directive(指令名，回调函数 )

二、配置对象中常用的3个回调:

​	(1)、bind(element,binding):指令与元素成功绑定时调用。

​	(2)、inserted(element,binding):指令所在元素被插入页面时调用。

​	(3)、update(element,binding):指令所在模板结构被重新解析时调用。

三、备注:

​	1、指令定义时不加 v-，但使用时要加 v-

​	2、指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。并且在定义的时候要用字符串作为函数的名字

局部指令（写在new Vue内部）

```js
directives:{
    // 写法一 
    fbind:{
        // 指令和函数绑定成功时调用（初始）   
        bind(element,binding){
            // console.log('bind');
            element.value = binding.value
        },
        // 指令所在元素被插入页面的时候调用
        inserted(element,binding){
            // console.log('inserted');
            element.focus()
        },
        // 指令所在的模板被重新解析时调用
        update(element,binding){
        	// console.log('update');
        	element.value = binding.value
        }
    },
    // 写法二
    // 注意
    // 当指令使用多个单词的时候要使用xxx-xxx的形式
    // 这种形式写指令函数的时候要将其变成字符串 
    'big-number':function(element,binding){
    	// 真实Dom元素
        console.log(element);
        // 检验谁是不是谁的元素
        console.log(element instanceof HTMLElement)
        // binding绑定对象
        console.log(binding);
        // this对象不是vm是window
        console.log(this);
        element.innerText = binding.value*10
    }    
    // big函数何时会被调用？
    //  1、指令与元素成功绑定时（初识）
    //  2、指令所在的模板被重新解析的时候会调用
}
```

全局指令（写在Vue外部）

```js
// 全局指令
Vue.directive('fbind',{
    // 指令和函数绑定成功时调用（初始）   
    bind(element,binding){
        // console.log('bind');
        element.value = binding.value
    },
    // 指令所在元素被插入页面的时候调用
    inserted(element,binding){
        // console.log('inserted');
        element.focus()
    },
    // 指令所在的模板被重新解析时调用
    update(element,binding){
        // console.log('update');
        element.value = binding.value
    }
})
// 全局指令
Vue.directive('big',function(element,binding){
    // 真实Dom元素
    console.log(element);
    // 检验谁是不是谁的元素
    console.log(element instanceof HTMLElement)
    // binding绑定对象
    console.log(binding);
    // this对象不是vm是window
    console.log(this);
    element.innerText = binding.value*10
})
```



## 生命周期

![生命周期](D:\BaiduNetdiskDownload\尚硅谷Vue技术全家桶（天禹老师主讲）\资料（含课件）\资料（含课件）\02_原理图\生命周期.png)

### 什么是生命周期

1、又名：生命周期回调函数、生命周期函数、生命周期钩子

2、是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数

3、生命周期函数的名字不可更改，但具体内容是程序员根据需求编写的

4、生命周期函数中的this指向是vm 或者 组件实例对象

### 写法

```js
new Vue({
    el:'#root',
    data:{
        n:1
    },
    methods: {
    },
    beforeCreate(){
        // this仍然是vm,但是这里的vm是没有进行数据代理的也就是data中的数据是没有被传入到_data中的
    },
    created(){
        // 数据监测 数据代理已经完成
    },
    beforeMount() {
        // Vue已经开始解析模板生成虚拟Dom,此时页面还不能显示解析好的内容
    },
    mounted() {
        // 此时页面呈现的是经过Vue编译过的Dom
        // 此时对Dom的操作均是有效的,但是要尽可能避免
        // 至此初始化过程已经结束
        // 一般在此进行:
        // 开启定时器  发送网络请求  订阅消息  绑定自定义事件等初始化操作
    },
    beforeUpdate(){
        // 当数据发生改变的时候,调用beforeUpdate函数
        // 数据变了,但是页面还没有改变
    },
    updated(){
        // 数据已经和页面保持同步
        // 数据更新了 页面也更新了
    },
    beforeDestroy(){
        // add能够调用,但是n的数值并不会变 
        // 对数据的修改不会再触发更新了,当然destroyed钩子中也不会起作用
    },
    destroyed() {
        console.log('destroyed');
    },
});
```



### 常用的生命周期钩子

1、mounted：发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】

2、beforeDestroy：清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】

### 关于销毁Vue实例

​	1.销毁后借助Vue开发者工具看不到任何信息。

​	2.销毁后自定义事件会失效，但原生DOM事件依然有效。

​	3.一般不会在beforeDestroy操作数据。因为即便操作数据。也不会再触发更新流程了

## 组件的理解

组件的定义：

​		实现应用中局部功能代码和资源的集合（css+html+javascript）

<img src="C:\Users\10293\AppData\Roaming\Typora\typora-user-images\image-20220320165113040.png" alt="image-20220320165113040" style="zoom: 67%;" />

<img src="C:\Users\10293\AppData\Roaming\Typora\typora-user-images\image-20220320165716924.png" alt="image-20220320165716924" style="zoom:67%;" />

<img src="C:\Users\10293\AppData\Roaming\Typora\typora-user-images\image-20220320165741958.png" alt="image-20220320165741958" style="zoom:67%;" />

### 模块

理解：向外提供特定功能的js程序，一般就是一个js文件

为什么：js文件很多很复杂

作用：服用js，简化js的编写，提高js的运行效率 

### 组件

理解：用来实现局部（特定）功能效果的代码集合（html+css+javascript....）

为什么：一个界面功能很复杂

作用：复用编码，简化项目编码，提高运行效率

### 模块化

当应用中ks都以模块来编写，那这个应用就是一个模块化的应用

### 组件化

当应用中的功能都是多组件的方式来编写的，那这个应用就是一个组件化的应用

### 非单文件组件

一个文件中包含了n个组件

### 单文件组件

 一个文件中只包含了一个组件（.vue）

### 组件使用步骤

Vue中使用组件三大步骤

​	一、定义组件(创建组件)

​	二、注册组件

​	三、使用组件(写组件杯签)

一、如何定义一个组件 ?

​	使用**Vue. extend(options)**创建。其 中options和Inew Vue(options)时传入的那个options几乎样，但区别如下：

​	1、**el**不要写，因为最终所有的组件都要经过个vm的管理，由vm中的el决定服务哪个容器

​	2、**data**必须写成函数，因为避免组件被复用时，数据存在引用关系。

​	备注:使用template可以配置组件结构。

二、如何注册组件?
	1、局部注册：靠new Vue的时候传入**components**选项

​	2、全局注册：靠**Vue.component('组件名'，组件)**

三、编写组件标签:

```html
<组件名></组件名>  例如--->  <school></school>
```

### 组件几个注意点

1、关于组件名:

​	一个单词组成:

​		第一种写法(首字母小写): school 

​		第二种写法(首字母大写): School 

​	多个单词组成:

​		第一种写法(kebab-case命名)：my- school

​		第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)

​	备注:

​	(1)、组件名尽可能回避HTML中已有的元素名称，例如: h2、H2都不行。

​	(2)、可以使用**name**配置项指定组件在开发者工具中呈现的名字。

2、关于组件标签:

​	第一种写法：<school></school>

​	第二种写法：<school/>

​	备注:不用使用脚手架时，<school/> 会导致后续组件不能谊染。

3.一个简写方式:

​	const school = Vue . extend(options)  可简写为: const school =options

## VueComponent

关于VueComponent:

​	1、school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的

​	2、我们只需要写<school></school>，Vue解析式就会帮我们创建school组件（本质上它）的实例对象，即帮我执行 new VueComponent（options）

​	3、特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！

​	4、关于this指向

​		(1)、组件配置中：

​			data函数、methods中的函数、watch中的函数、computed中的函数、它们的this均是【VueComponent实例对象】

​		(2)、new Vue(options)配置中：

​			data函数、methods中的函数、watch中的函数、computed中的函数  它们的this均是【Vue实例对象】

​	5、VueComponent实例对象，以后简称为vc （也可称之为：组件实例对象）

​		  Vue实例对象简称为vm

VueComponent实例对象存储在Vue实例对象中的$children中

## 组件自定义事件

1.一种组件间通信的方式,适用于 子组件 ===> 父组件

  2.使用场景: A是父组件,B是子组件,B想给A传数据,那么就要给A中绑定B的自定义事件(事件的回调在A中)

  3.绑定自定义事件:

​    1.第一种方式,在父组件中:<Demo @zezeze="test"> 或 <Demo v-on:zezeze="test">

​    2.第二种方式,在父组件中:

​      <Demo ref="demo">

​      .......

​      mounted(){

​        // 给xxx组件对象实例绑定zezeze自定义事件,回调函数是test

​        this.$refs.xxx.$on('zezeze',this.test)

​      }

​    3.若想让自定义事件只能触发一次,可以使用once修饰符,或者$once方法

​    4.触发自定义事件: this.$emit('zezeze',数据)

​    5.解锁自定义事件: this.$off('zezeze') 解锁多个的时候 this.$off(['事件1','事件2'])

​    6.组件上也可以绑定原生事件,需要使用native,如果不使用native就会被当作是自定义事件

​    7.注意: 通过this.$refs.xxx.$on('zezeze',回调) 绑定自定义事件式,回调要么配置要methods中,要么使用箭头函数,否则this的指向会出现问题

## 全局事件总线

![image-20220326103611474](C:\Users\10293\AppData\Roaming\Typora\typora-user-images\image-20220326103611474.png)

## 消息订阅与发布