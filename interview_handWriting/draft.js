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
        while(curIndex > 0 && arr[curIndex - 1] > curVal) {
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
    let len = arr.len;
    let midIndex = parseInt(len >> 2);
    let midVal = arr.slice(midIndex, 1)[0];
    let left = [], right = [];
    for(let i of arr) {
        i > midVal ? right.push() : left.push();

    return [...quickSort(left), midVal, ...quickSort(right)]
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
    let res = context.fn(...rest);
    delete context.fn();
    return res    
};

Function.prototype.myApply = (context, args) => {
    context.fn = this;
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
        this.apply(context, [...args, ...newArgs])
    }
};

const myNew = (fn, ...args) => {
    let obj = {};
    Object.setPrototypeOf(obj, fn.prototype);
    let res = fn.call(obj.args);
    return res instanceof Object ? res : obj

};

Promise.newAll = function(promises){
    let arr = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((item, i) => {
            Promise.resolve(item).then(res => {
                arr[i] = res;
                count += 1;
                if(count == promises.length) {
                    resolve(arr)
                }
            }).catch(reject);
        })
    })
};

const dfs = (root) => {
    console.log(root);
    root.children.forEach(dfs);
}

const bfs = (root) => {
    let queue = [root];
    while(queue.length) {
        let q = queue.shift();
        console.log(q.val);
        q.children.forEach(e => {
            queue.push(e);
        })
    }
}

// 组合式继承
function Parent() {
    this.age = 10;
}

function Child() {
    Parent.call(this);
    this.name = '12';
}
Child.prototype = new Parent();
let extendTest = new Child();


const deepClone = (target, src) => {
    var target = {};
    for(let key in src) {
        if(typeof src[key] === 'object') {
            target[key] = src[key].constructor === Array ? [] : {};
            deepClone(target[key], src[key]);
        } else {
            target[key] = src[key];
        }
    }
}

// vue3 响应式原理
let obj = new Proxy(obj, {
    get: function(target, propKey, receiver) {
        return Reflect.get(target, propKey, receiver)
    },
    set: function(target, propKey, value, receiver) {
        return Reflect.set(target, propKey, value, receiver)
    }
})
// vue2 响应式原理
Object.defineProperty(obj, key, {
    get: function getter(){
        return obj[key]
    },
    set: function setter(newVal){

    }
})

// v-model
<template>
    <input @input='onInput' :value="localValue" />
</template>
<script>
    export default {
        data() {
            return {
                localValue: '',
            }
        },
        methods: {
            oninput(v){
                this.localValue = v.target.value;
            }
        }
    }
</script>