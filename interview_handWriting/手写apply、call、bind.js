
// test
let obj = {
    name: 'animuss',
    showName: function(arg) {
        console.log(this.name + 'is' + arg);
    }
}
function test (arg1, arg2, arg3) {
    console.log(this.name);
    console.log(arg1, arg2, arg3);
}

test.myCall(obj, 1, 2, 3);
test.myApply(obj, [1,2,3]);

obj.showName('mess');
obj.showName.myBind({ name: 'Ani'})('love');

// -------------------------------------------

// 通常使用call 立即执行
Function.prototype.myCall = function(context, ...rest) {
    // 1. 改变this
    context.fn = this;
    // 2. 接收参数
    var res = context.fn(...rest);
    delete context.fn;
    return res
}

// apply 主要是参数为数组时使用 立即执行
Function.prototype.myApply = function(context, args) {
    // 1. 改变this
    context.fn = this;
    // 2. 参数
    let res;
    if(!args) {
        res = context.fn();
    } else {
        res = context.fn(...args);
    }
    return res
}

// bind 需要手动执行 调用apply
Function.prototype.myBind = function(context, ...args) {
    return (...newArgs) => {
        this.apply(context, [...args, newArgs]);
    }
}