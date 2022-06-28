/**
 * 使用场景分析
 * 
 * beforeCreate
 * -执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务
 * 
 * created
 * -组件初始化完成，各种数据可以使用，常用于异步数据获取
 * 
 * ------------
 * vue3去掉了vue2的beforeCreate和crated阶段，新增setup
 * ------------
 * 
 * beforeMount
 * -未执行渲染、更新、DOM未创建
 * 
 * mounted
 * -初始化结束，DOM已创建，而用于获取访问数据和DOM元素
 * 
 * beforeUpdate
 * -更新前，可用于获取更新前的各种状态
 * 
 * updated
 * -更新后，所有状态为最新
 * 
 * beforeDestroy
 * -销毁前，可用于一些定时器或订阅的取消
 * -vue3改名为onbeforeUnmounted
 * 
 * 
 * destroyed
 * --组件已销毁
 * vue3改名为onUnmounted
*/