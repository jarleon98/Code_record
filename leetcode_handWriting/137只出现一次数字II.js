//运用哈希表，第一遍存 值-次数 对， 第二遍查找value=1的
var singleNumber = function(nums) {
    let map = new Map();
    for(let i in nums) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    for(let i=0; i<nums.length; i++) {
        if(map.get(nums[i]) == 1)
            return nums[i]
    }
}