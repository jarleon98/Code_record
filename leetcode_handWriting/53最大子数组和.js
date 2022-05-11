
var maxSubArray = function(nums) {
    //cur 为当前和 loop为之前和
    //开始都为首项值
    let cur, loop, max = nums[0];
    for(let i=0; i<nums.length; i++) {
        //如果之前和>0
        if(loop > 0) {
            //讲当前项纳入到当前和
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