//set，
var singleNumber = function(nums) {
    var set = new Set();
    for(let i in nums) {
        set.has(nums[i]) ? set.delete(nums[i]) : set.add(nums[i]);
    }
    return [...set][0]
}

//reduce异或操作
var singleNumber2 = (nums) => {
    return nums.reduce((pre, cur) => pre ^ cur);
}