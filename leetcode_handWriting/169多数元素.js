/*
给定一个大小为 n 的数组 nums ，返回其中的多数元素。
多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素
*/

var majorityElement = (nums) => {
    // 右移一位，除以2
    n = nums.length >> 1;
    let obj = {};
    for(let i in nums) {
        obj[nums[i]] = obj[nums[i]] !== undefined ? obj[nums[i]] + 1 : 1
        if(obj[nums[i]] > n) {
            return nums[i]
        }
    }
};