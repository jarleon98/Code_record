
/*
给你一个整数数组 nums ，
请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组 是数组中的一个连续部分。
*/


var maxSubArray = function(nums) {
    //cur 为当前和 loop为之前和
    //开始都为首项值
    let cur, loop, max = nums[0];
    for(let i=0; i<nums.length; i++) {
        //如果之前和>0
        if(loop > 0) {
            //将当前项纳入到当前和
            cur = loop + nums[i];
        } else {
            //重置当前和为当前项
            cur = nums[i];
        }
        //重置最大值
        if(cur > max) max = cur;
        //每次把当前和存为之前和
        loop = cur;
    }
    return max;
}

/*
动态规划
dp[i]
*/

var maxSubArray = function(nums) {
    let res = nums[0];
    const dp = [ nums[0] ];
    for(let i=1; i < nums.length; i++) {
        if(dp[i-1] > 0) {
            dp[i] = dp[i-1] + nums[i];
        } else {
            dp[i] = nums[i];
        }
        res = Math.max(res, dp[i]);
    }
    return res
};