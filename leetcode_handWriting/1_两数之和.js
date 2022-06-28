
//暴力破解
var twoSum1 = function (nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=1; j<nums.length; j++){
            if((nums[i]+nums[j]) == target)
                return [i,j];
        }
    }
}


//map结构
var twoSum2 = (nums, target) => {
    //主要是利用map结构, 存储为 value-index 形式
    let resMap = new Map();
    for(let i=0; i< nums.length; i++){
        other = target - nums[i];
        if(resMap.has(other))
            return [i, resMap.get(other)];
        else
            resMap.set(nums[i], i);    
    }

}
