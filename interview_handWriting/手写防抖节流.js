
// 防抖，限定时间内再次触发重新计时

//定义个全局的计时器
var timer = null;
function fd () {
    // 清除旧计时器
    clearTimeout(timer);
    // 设定计时器
    timer = setTimeout(() => {
        /**
         * 代码块
        */
    }, 500)
};

// 节流， 限定时间内执行最后一次

// 设定标志符
var flag = true;
function jl () {
    // 判断此时标志
    if(!flag) {
        return
    }
    // 更改标志，表示进行调用
    flag = false;
    setTimeout(() => {
        /**
         * 代码块
        */
       // flag初始化
       flag = true;
    }, 500)
}