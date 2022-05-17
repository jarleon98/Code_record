/**
 * 
 * SPA(single-page application)
 * 
 * 概念：
 * 单页应用SPA是一种网络应用程序或网站的模型。通过动态重写当前页面来与用户交互，避免了页面间切换打断用户体验。
 * 
 * 所有必要代码(HTML、js、css)通过单个页面的加载而检索，或根据需要动态加载。
 * 
 * 页面在任何时间点都不会重新加载，也不会讲控制转移到其他页面。
 * ---------------------------------------------------------------------------------------------------
 * 
 * SPA与MPA区别：
 * 
 * MPA:每个页面都是一个主页面，都是独立的。
 * 当访问另一个页面时，都需要重新加载HTML、js、CSS文件，公共文件则是按需加载。
 * 
 * 组成：SPA一个主页面和多个页面片段；MPA多个主页面
 * 刷新方式：SPA局部刷新；MPA整页刷新
 * url模式： SPA哈希模式；MPA history模式
 * SEO搜索引擎优化： SPA难实现，可用SSR方式改善；MPA容易实现
 * 数据传递： SPA容易；MPA通过url、cookie、localStorage等传递
 * 页面切换： SPA速度快，用户体验好；MPA切换加载资源，速度慢，用户体验差
 * 维护成本： SPA相对容易 MPA相对复杂
 * 
 * SPA
 * 优点：
 * 具有桌面应用的即时性、网站的可移植性和可访问性
 * 用户体验好、快，内容的改变不需要重新加载整个页面
 * 良好的前后端分离，分工更明确
 * 
 * 缺点：
 * 不利于搜索引擎的抓取
 * 首次渲染速度相对较慢
 * 
 * 
 * 如何给SPA做SEO：
 * 
 * 基于VUE
 * 1.SSR服务端渲染：
 * ---将组件或页面通过服务器生成HTML，再返回给浏览器。
 * 2.静态化：
 * ---将动态页面抓取保存为静态页面，页面实际存在于服务器的硬盘中。
*/

// 实现SPA，history路由
class Router {
    constructor () {
        this.routes = {};
        this.listerPopState();
    }

    init(path) {
        history.replaceState({
            path: path,
        }, null, path);
    }
    route(path, callback){  
        this.routes[path] = callback;  
    }  
      
    push(path) {  
        history.pushState({path: path}, null, path);  
        this.routes[path] && this.routes[path]();  
    }  
      
    listerPopState () {  
        window.addEventListener('popstate' , e => {  
            const path = e.state && e.state.path;  
            this.routers[path] && this.routers[path]()  
        })  
    }
}

// 使用 Router  
  
window.miniRouter = new Router();  
miniRouter.route('/', ()=> console.log('page1'))  
miniRouter.route('/page2', ()=> console.log('page2'))  
  
// 跳转  
miniRouter.push('/page2')  // page2  