// const merge = (nums1, m, nums2, n) => {
//     let len = m + n - 1;
//     m = m - 1;
//     n = n - 1;
//     // 分别从nums1和nums2开始遍历，大的添加到nums1
//     while(m >= 0 && n >= 0) {
//         nums1[len] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
//         len--;
//     }
//     // 剩余的nums2添加到nums1前面
//     return nums1.splice(0, n+1, ...nums2.slice(0, n+1))
// }