
/*
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头
*/

var plusOne = function(digits) {
    //从后往前加一
    let len = digits.length - 1;
    //当=9时,置0，前移len
    while(digits[len] == 9){
        digits[len] = 0;
        len--;
    }
    //如果前移到首位，加一
    if(len == -1){
        digits.unshift(1);
    }
    //位置加一
    digits[len]++;
    return digits;
};

