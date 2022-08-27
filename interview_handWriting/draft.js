const bubbleSort = (arr) => {
    const len = arr.length;
    for(let i = len; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] < arr[j-1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
        }
    }
    return arr
};

const insertSort = (arr) => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        let min = i;
        for(let j = i; j < len; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr
};

const selectSort = (arr) => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        let cur = i;
        let curVal = arr[i];
        while(cur > 0 && arr[cur - 1] > curVal) {
            [arr[cur], arr[cur - 1]] = [arr[cur - 1], arr[cur]];
            cur--;
        }
        arr[cur] = curVal;
    }
    return arr
};

const quickSort = (arr) => {
    const len = arr.length;
    let mid = parseInt(len >> 2);
    let midVal = arr.slice(arr, 1)[0];
    let left = [], right = [];
    for(let i of arr) {
        i > midVal ? right.push() : left.push();
    }
    return [...quickSort(left), midVal, ...quickSort(right)]

};

var timer = null;
const fangdou = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        // 
    }, 1000)
}; 

var flag = true;
const jieliu = () => {
    if(!flag) {
        return 
    }
    flag = false;
    setTimeout(() => {
        //
        flag = true;
    }, 1000)
};

const myCurry = () => {
    let _args = Array.prototype.slice.call(arguments);
    let _add = () => {
        _args.push(...arguments);
        return _add
    }
    _add.toString = () => {
        return _args.reduce((x, y) => {
            return x + y;
        }, 0)
    }
    return _add
};

Function.prototype.myCall = (context, ...rest) => {
    context.fn() = this;
    let res = context.fn(...rest);
    delete context.fn();
    return res
};

Function.prototype.myApply = (context, args) => {
    context.fn() = this;
    let res;
    if(!args) {
        res = context.fn();
    } else {
        res = context.fn(args);
    }
    return res
};

Function.prototype.myBind = (context, ...args) => {
    return (...newArgs) => {
        this.apply(context, [...args, ...newArgs]);
    }
};

const myNew = (fn, ...args) => {
    let obj = {};
    Object.setPrototypeOf(obj, fn.prototype);
    let res = fn.call(obj.args);
    return res instanceof Object ? res : obj;
}