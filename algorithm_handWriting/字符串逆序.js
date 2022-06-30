
// 1. 借助数组的reverse()方法
const reverseString1 = (str) => {
    // 字符串.split('')转为数组
    // 数组.join('')转为字符串
    return str.split('').reverse().join('');
};

// 2. 字符串的charAt()方法
const reverseString2 = (str) => {
    let result = '';
    for(let i = str.length-1; i >= 0; i--) {
        // 字符串拼接
        result += str.charAt(i);
    }
    return result
};
