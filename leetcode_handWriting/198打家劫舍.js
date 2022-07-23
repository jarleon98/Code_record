/*
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额
*/

/**
dp[i]表示0-i中能偷的最大金额
 */ 
var rob = function(nums) {
    const len = nums.length;
    
    const dp = [nums[0], Math.max(nums[0], nums[1])];
    for(let i = 2; i < len; i++) {
        // dp[i-1] 表示只偷当前位置i-1的房间
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]);
    }
    return dp[len-1]
};


const rob2 = (nums) => {
    if(nums.length == 1)    
        return nums[0]
    const len = nums.length;
    
    let dp_0 = nums[0];
    let dp_1 = Math.max(nums[0], nums[1]);
    let dp_max = dp_1;
    for(let i = 2; i < len; i++) {
        dp_max = Math.max(
            dp_1,           // 不抢当前家
            dp_0 + nums[i]  //抢当前家
        );
        // 往后移动
        dp_0 = dp_1;
        dp_1 = dp_max;
    }
    return dp_max
};