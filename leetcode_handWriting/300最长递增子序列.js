/*
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：
输入：nums = [10,9,2,5,3,7,101,18]
输出：4

*/

// 动态规划
const lengthOfLIS = (nums) => {
    let dp = new Array(nums.length).fill(1);
    let res = 1;
    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[j] < nums[i]) {
                // 构成递增对
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
            // 更新 最大数结果
            res = Math.max(res, dp[i]);
        }  
    } 
    return res 
};