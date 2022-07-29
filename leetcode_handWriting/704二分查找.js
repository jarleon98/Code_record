var search = function(nums, target) {
    return search_interval(nums, target, 0, nums.length-1)
};

const search_interval = (nums, target, left, right) => {
    if(left > right) {
        return -1
    }
    let mid = left + Math.floor((right - left) >> 2);
    if(nums[mid] == target) {
        return mid
    } else if(nums[mid] < target) {
        return search_interval(nums, target, mid+1, right)
    } else {
        return search_interval(nums, target, left, mid-1)
    } 
};