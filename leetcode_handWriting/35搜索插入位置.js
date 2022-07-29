const searchInsert = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let mid = parseInt((left + right) >> 1);
    while(left <= right) {
        if(nums[mid] == target) {
            return mid
        } else if(nums[mid] < target){
            left = mid + 1; 
        } else {
            right = mid - 1;
        }
    }
    return left    
};