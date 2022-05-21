/**
 * 
 * new Vue()过程
 * 
 * 源码：src/core/instance/index.js
 * 调用初始化_init方法，在Vue原型上定义_init方法。源码位置：src/core/instance/init.js
 * --能看到：
 * --在调用beforeCreate前，数据初始化未完成，像data、props属性无法访问到
 * --created时，数据初始化完成，能访问data、props属性，此时并未完成DOM挂载，无法访问DOM元素
 * 
 * 挂载方法是调用Vm.$mount方法
 * 
 * initState方法是完成props\data\method\watch\methods之后
 * 源码位置：src/core/instance/state.js
 * 初始化顺序：props、methods、data
 * 
 * 挂载方法是调用vm.$mount方法
 * -不要将根元素放到body或html上
 * -可以在对象中定义template/render或者直接使用template、el表示元素选择器
 * -最终都会解析成render函数，调用compileToFunctions，会将template解析成render函数
 * 
 * -------------------------------------------------------
 * 对template的解析步骤：
 * 1.将html文档片段解析成 ast描述符
 * 2.将 ast描述符 解析成字符串
 * 3.生成render函数
 * 生成render函数，挂载到vm上，会再次调用mount方法
 * render的作用主要是生成vnode
 * 源码：src/core/instance/render.js
 * 
*/

/**
 * 
 * 结论：
 * 
 * new Vue的时候会调用_init方法
 * --定义$set $get $delete $watch等方法
 * --定义$on $off $emit $off等事件
 * --定义_update $forceUpdate $destroy生命周期
 * 
 * 调用$mount进行页面挂载
 * 
 * 挂载时主要通过mountComponent方法
 * 
 * 定义updateComponent更新函数
 * 
 * 执行render生成虚拟DOM
 * 
 * _update将虚拟DOM生成真实DOM，并渲染到页面中
 * 
*/