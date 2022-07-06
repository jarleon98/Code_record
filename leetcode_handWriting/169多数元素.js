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