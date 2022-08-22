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
        let minIndex = i;
        for(let j = i; j < len; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr
};

const selectSort = (arr) => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        let curIndex = i;
        let curVal = arr[i];
        for(let j = curIndex; j < len; j++) {
            while(curIndex > 0 && arr[curIndex - 1] > curVal) {
                [arr[curIndex], arr[curIndex - 1]] = [arr[curIndex - 1], arr[curIndex]];
                curIndex--;
            }
        }
        arr[curIndex] = curVal;
    }

};

const quickSort = (arr) => {
    let len = arr.length;
    let mid = parseInt(len >> 2);
    let midVal = arr.slice(mid, 1)[0];
    let left = [], right = [];
    for(let i of arr) {
        i > midVal ? right.push(i) : left.push(i);
    }
    return [...quickSort(left, midVal, ...quickSort(right))]
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
    };
    _add.toString = () => {
        return _args.reduce((x,y) => {
            x + y;
        })
    }
    return _add
};

Function.prototype.myCall = (context, ...rest) => {
    context.fn() = this;
    let res = context.fn(...rest);
    delete context.fn();
    return res
};

Function.prototype.myApply = (context, rest) => {
    context.fn() = this;
    let res;
    if(!rest) {
        res = context.fn();
    } else {
        res = context.fn(...rest);
    }
    return res
};

Function.prototype.myBind = (context, ...rest) => {
    return (...newRest) => {
        this.apply(context, [...rest, ...newRest])
    }
};