/*
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
*/

var mySqrt = function(x) {
    // 二分法
    let [l, r] = [0, x];
    let res = -1;
    while(l <= r) {
        let mid = (l + r) >> 1;
        if(mid * mid > x) {
            r = mid - 1;
        } else if(mid * mid < x) {
            // 防止越界
            res = mid;
            l = mid + 1;
        } else {
            res = mid;
            return res
        }
    }
    return res
};