const bubbleSort = (arr) => {
    const len = arr.length;
    for(let i = len; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j-1] > arr[j]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            }
        }
    }
    return arr
};

const insertSort = (arr) => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        var curIndex = i;
        var curVal = arr[i];
        while(curIndex > 0 && arr[curIndex - 1] > arr[curIndex]) {
            [arr[curIndex-1], arr[curIndex]] = [arr[curIndex], arr[curIndex-1]];
            curIndex--;
        }
        arr[curIndex] = curVal;
    }
    return arr
    
};

const selectSort = (arr) => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        let minIndex = i;
        for(let j = i; j < len; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    return arr
};

const quickSort = (arr) => {


};

var timer = null;
const fangdou = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        // 

    },1000)
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
    })

};

const myCurry = () => {
    let _args = Array.prototype.slice.call(arguments);
    let _inner = () => {
        _args.push(...arguments);
        return _inner
    }
    _inner.toString = () => {
        return _args.reduce((x,y) => {
            return x + y
        })
    }
    return _inner
};

Function.prototype.myCall = (context, ...rest) => {
    context.fn = this;
    
};

Function.prototype.myApply = (context, args) => {

};

Function.prototype.myBind = (context, ...args) => {

};

const myNew = (fn, ...args) => {
    let obj = {};
    Object.setPrototypeOf(obj, fn);
    var res = fn.call(obj.args);
    return res instanceof Object ? res : obj
}