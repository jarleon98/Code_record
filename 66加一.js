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

