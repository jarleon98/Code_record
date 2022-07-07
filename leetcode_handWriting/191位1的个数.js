
/*
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