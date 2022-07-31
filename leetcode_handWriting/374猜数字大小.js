/*
你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有 3 种可能的情况（-1，1 或 0）：

-1：我选出的数字比你猜的数字小 pick < num
1：我选出的数字比你猜的数字大 pick > num
0：我选出的数字和你猜的数字一样。恭喜！你猜对了！pick == num
返回我选出的数字。

*/


var guessNumber = function(n) {
    let left = 0;
    let right = n;
    while(left < right) {
        let mid = (left + right) >> 1;
        if(guess(mid) <= 0) {
            right = mid;    // [left, mid]
        } else {
            left = mid + 1; // [mid+1, right]
        }
    }
    return left
};