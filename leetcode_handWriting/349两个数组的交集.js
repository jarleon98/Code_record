

// set
var intersection1 = function(nums1, nums2) {
    return res = [...new Set(nums1)].filter(item => new Set(nums2).has(item))
};

// Hash map
var intersection2 = (nums1, nums2) => {
    let map = new Map();
    let res = [];
    for(let i in nums1) {
        map[nums1[i]] = true;
    }
    for(let j in nums2) {
        if(map[nums2[j]]) {
            res.push(nums2[j]);
            map[nums2[j]] = false;
        }
    }
    return res
};