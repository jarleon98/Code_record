/**
 * 选择排序
 * 每次从待排序数据元素中选出最小的元素放在序列起始位置
 * 再从剩余未排元素中寻找最小元素，类推。
 * 
 * 时间复杂度 O(n方)
 */
function selectSort(arr){
    const len = arr.length;
    for(let i=0; i<len; i++){
        let k = i;
        for(let j=i; j<len; j++){
            if(arr[j] < arr[k])
                k = j;
        }
        //将k存在左面，遍历从k开始
        [arr[i], arr[k]] = [arr[k], arr[i]];
    }
    return arr
}