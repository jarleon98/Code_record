/**
 * 慢指针保证它和它前面的数字都是不重复的
 * 不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成
 * 
 */
 var removeDuplicates = function(nums) {
    // 慢指针
    let slowPoint = 0;
    for(let fastPoint = 1; fastPoint < nums.length; fastPoint++) {
        if(nums[fastPoint] !== nums[slowPoint]) {
            // 如果不相等，让慢指针下一位变成该值，慢指针位移一位
            nums[slowPoint+1] = nums[fastPoint];
            slowPoint++;
        }
    }
    return slowPoint + 1
};