/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let n = nums.length;
    if(n == 3)
        return getSum(nums)
    // 升序排列nums
    nums.sort((x,y) => x - y);
    let min = Infinity;
    let res;
    for(let i=0; i<=nums.length-3; i++) {
        // 获取三个点
        let basic = nums[i];
        let left = i + 1;
        let right = n - 1;

        while(left < right) {
            let sum = basic + nums[left] + nums[right];
            let diff = Math.abs(sum - target);
            if(diff < min) {
                // 更新min
                min = diff;
                res = sum;
            }
            if(sum < target) {
                left++;
            } else if(sum > target) {
                right--;
            } else {
                return sum
            }
        }
    }
    return res 
};

var getSum = (nums) => {
    return nums.reduce((prev, cur) => prev + cur, 0)
};