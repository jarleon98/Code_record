const myNew = (fn, ...args) => {
    // 1. 创建空对象
    let obj = {};
    // 2, 改变obj指向
    Object.setPrototypeOf(obj, fn.prototype);
    // 3. 改变this指向
    var result = fn.call(obj.args);
    // 4, 返回判断
    return result instanceof Object ? result : obj;
}       