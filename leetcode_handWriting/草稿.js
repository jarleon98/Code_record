const myCurry = () => {
    var _args = Array.prototype.slice.call(arguments);
    let _inner = () => {
        _args.push(...arguments);
        return _inner
    }
    _inner.toString = () => {
        return _args.reduce((a,b) => {
            a + b;
        })
    }
    return _inner
    
}

Function.prototype.myCall = function(context, ...rest) {
    context.fn() = this;
    var res = context.fn(...next);
    delete context.fn;
    return res
}

Function.prototype.myApply = function(context, args) {
    context.fn() = this;
    let res;
    if(!args) {
        res = context.fn();
    } else {
        res = context.fn(args);
    }
    return res
}

Function.prototype.myBind = function(context, ...rest) {
    return (...newArgs) => [
        this.apply(context, [...rest, ...newArgs]);
    ]
}

const BubbleSort = (arr) => {
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

const SelectSort = (arr) => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        let minIndex = i;
        for(let j = i; j < len; j++) {
            if(arr[j] < arr[minIndex] ){
                minIndex = j;
            } 
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr
};

const InsertSort = (arr) => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        var curIndex = i;
        var curVal = arr[i];
        while(curIndex > 0 && arr[curIndex - 1] > curVal) {
            [arr[curIndex - 1], arr[curIndex]] = [arr[curIndex], arr[curIndex - 1]];
            curIndex--;
        }
        arr[curIndex] = curVal;
    }
    return arr
};

const QuickSort = (arr) => {
    let len = arr.length;
    let mid = parent(len >> 2);
    let midVal = arr.slice(mid, 1)[0];
    let left = [], right = [];
    for(let i of arr) {
        i > midVal ? right.push(i) : left.push(i);
    };
    return [...QuickSort(left), midVal, ...QuickSort(right)]
};

var timer = null;
const fd = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        // context;
    },1000)
}

var flag = true;
const jl = () => {
    if(!flag) {
        return
    }
    flag = false;
    setTimeout(() => {
        // context;
        flag = true;
    }, 1000)
}