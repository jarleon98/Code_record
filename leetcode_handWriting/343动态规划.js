/*
给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

返回 你可以获得的最大乘积 

*/
// 动归 先建立一个dp数组，然后找出 转移方程的规律

/*
dp[i]为当前数 (i-j)*j 当前数-j后乘j； dp[i-j]*j 表示把i拆分成j和继续把(i-j)这个数拆分，取(i-j)拆分结果中的最大乘积与j相乘
dp[i] = Math.max(dp[i], dp[i-j]*j, (i-j)*j)
 
*/

var integerBreak = function(n) {
    let dp = new Array(n+1).fill(0);
    dp[2] = 1;
    for(let i = 3; i <= n; i++) {
        for(let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * dp[i-j], j * (i-j))
        }
    }
    return dp[n]
};
