/**
 * 
 * 网页上发生的事件触发后发生事件流
 * 元素是串联的
 * 
 * 事件冒泡： div->body->html->Document 从下到上
 * 
 * 事件捕获： 从上到下
 * 
 * DOM事件流：
 * 1.事件捕获阶段
 * 2.处于目标阶段
 * 3.事件冒泡阶段
 * 
 * 
 * 事件处理程序
 * -DOM0级  btn.onclick
 * 默认事件冒泡 
 * 
 * -DOM2级  btn.addEventListener('click',fn,false)
 * 默认事件冒泡， 改为true则事件捕获
 * 
*/

