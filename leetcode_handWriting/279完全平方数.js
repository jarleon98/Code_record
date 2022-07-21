/**
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；
换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 */

 /*
 状态转移方程 dp[i] 为完全平方和的最少数量 dp[i- j*j] + 1 表示减去一个完全平方数j之后加1=dp[i]
 */

 var numSquares = function(n) {
    // 初始化全0的dp数组
    const dp = [...Array(n)].map((_) => 0);

    for(let i = 1; i <= n; i++) {
        dp[i] = i;
        for(let j = 1; i - j * j >=0; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n]
};