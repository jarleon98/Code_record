
/*
编写一个函数，输入是一个无符号整数（以二进制串的形式），
返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。

重点： x & (x-1)
*/

var hammingWeight1 = function(n) {
    // x & (x-1) : x用二进制表示时最右边的1变成0，改变次数就是有几个1
    let count = 0;
    while(n) {
        n &= (n - 1);
        count ++; 
    }
    return count
};

var hammingWeight2 = (n) => {
    // 先转为2进制字符串再转为数组，过滤条件
    return n.toString(2).split('').filter(i => i === '1').length
};