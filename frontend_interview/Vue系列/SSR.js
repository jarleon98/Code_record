/**
 * 
 * SSR（Server-Side Rendering）服务端渲染
 * 服务测完成页面HTML结构拼接 的页面处理技术
 * 发送到浏览器，为其绑定状态和事件
 * 
 * Web3个阶段：
 * 
 * 1.传统web开发：
 *  网页内容在服务端渲染完成，一次性传输到客户端浏览器。浏览器拿到的是全部DOM结构
 * 
 * 2.SPA：
 *  客户端请求url，服务端返回宿主html模板，页面内容由js渲染(客户端渲染)，客户端向服务器请求数据。浏览器拿到的仅有宿主元素#app
 * 
 * 3.SSR：
 * 客户端请求url，服务端进行vue解析，返回html结构(渲染出完整首屏的DOM结构返回)，前端拿到首屏和完整SPA结构，应用激活后按照SPA方式运行
 * 
 * SSR解决问题：
 * 1.seo、搜索引擎优先爬取页面HTML结构。使用SSR时，服务端已经生成和业务关联的HTML，有利于seo。
 * 2.首屏呈现渲染。用户无需等待页面所有js加载完成就可以看到页面视图。
 * 
 * 
 * 
 * 
*/