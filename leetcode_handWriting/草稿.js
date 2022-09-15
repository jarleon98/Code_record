const myCurry = () => {
    let _args = Array.prototype.slice.call(arguments);
    let _inFun = () => {
        _args.push(...arguments);
        return _inFun
    }
    _inFun.toString = () => {
        return _args.reduce((x,y) => {
            retu rn x + y
        })
    }
    return _inFun    
}

Function.prototype.myCall = function(context, ...rest) {
    context.fn = this;
    let res = context.fn(...rest);
    delete context.fn;
    return res
}

Function.prototype.myApply = function(context, args) {
    context.fn = this;
    let res;
    if(!args) {
        return context.fn()
    } else {
        return context.fn(args)
    }
}

Function.prototype.myBind = function(context, ...rest) {
    return (...newArgs) => {
        this.apply(context, [...args, newArgs])
    }
}

const BubbleSort = (arr) => {

};

const SelectSort = (arr) => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        let min = i;
        for(let j = i; j < len; j++) {
            if(arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr
};

const InsertSort = (arr) => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        let cur = i;
        let curVal = arr[i];
        while(cur > 0 && arr[cur - 1] > curVal) {
            [arr[cur], arr[cur - 1]] = [arr[cur - 1], arr[cur]];
            cur--;
        }
        arr[cur] = curVal
    }
    return arr
};

const QuickSort = (arr) => {

};

var timer = null;
const fd = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {

    }, 1000)
}

var flag = true;
const jl = () => {
    if(!flag) return
    flag = false;
    setTimeout(() => {

        flag = true
    })
}

const myNew = (fn, ...args) => {
    let obj = {};
    Object.setPrototypeOf(obj, fn.prototype);
    let res = fn.call(obj.args);
    return res instanceof Object ? res : obj
}

Promise.newAll = function(promises) {
    let arr = [];
    let count = 0;
    return new Promise((reslove, reject) => {
        promises.forEach((item, i) => {
            Promise.reslove(item).then(res => {
                arr[i] = res;
                count += 1;
                if(count == promises.length) {
                    reslove(arr);
                }
            }).catch(reject);
        })
    })
}

const deepClone = (target, src) => {
    let target = target || {};
    for(let key in src) {
        if(typeof src[key] === 'object') {
            target[key] = src[key].constructor === Array ? [] : {};
            deepClone(target[key], src[key]);
        } else {
            target[key] = src[key];
        }
    }
    return target
}