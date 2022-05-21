// hash表存储值和索引位置，当出现相等值时判断索引差大小是否满足

var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for(let i in nums) {
        if(map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true
        };
        map.set(nums[i], i);
    };
    return false
};