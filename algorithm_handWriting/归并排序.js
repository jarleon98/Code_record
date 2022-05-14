/**
 * 先使每个子序列有序，再使子序列段间有序。
 * 若将两个有序表合并成一个有序表，称为二路归并
 * 
 * 速度仅次于快排，稳定排序算法
*/
function mergeSort(arr){
    const len = arr.length;
    if(len <= 1) return arr

    const mid = parseInt(len / 2);
    // 分割左右两个数组，遍历进行merge方法
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right){
    const L = left.length;
    const R = right.length;
    let l = 0, r = 0;
    let res = [];
    // 当左右都不为空时执行
    while(l < L && r < R){
        res.push(left[l] < right[r] ? right.slice(r) : left.slice(l));
    }
    res = [...res, ...L(l == L ? right.slice(r) : left.slice(l))];
    return res;
}