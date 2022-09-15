/**
 * 
 * 两类：
 * 1.循环法
 * 
 * 2.利用语法自身的键不可重复性
 * 
*/

// 1.1 es6的set
const unique1_1 = (arr) => {
    return Array.from(new Set(arr))
};
// 1.2 set+扩展运算符
const unique1_2 = (arr) => {
    return [...new Set(arr)]
};

// 2 嵌套for循环，splice删除
const unique2 = (arr) => {
    for(var i=0; i<arr.length - 1; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                // 值相同，删除第二个
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr
};

// 3 for循环，indexOf去重
const unique3 = (arr) => {
    var result = [];
    for(var i=0; i<arr.length; i++){
        if(result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result
};

// 4 sort排序
const unique4 = (arr) => {
    arr = arr.sort();
    var result = [arr[0]];
    for(var i=1; i<arr.length; i++) {
        if(arr[i] !== arr[i-1]) {
            result.push(arr[i]);
        }
    }
    return result
};

// 5 includes
const unique5 = (arr) => {
    var result = [];
    for(var i=0; i<arr.length; i++) {
        if(!result.includes(arr[i])) {
            result.push(arr[i]);
        }ß
    }
    return result
};

// 6 filter
const unique6 = (arr) => {
    return arr.filter((item, index, arr) => {
        return arr.indexof(item, 0) === index;
    })
};