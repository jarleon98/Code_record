/**
 * 输入一个元素，检查数组列表中的每个元素，
 * 将其插入到一个已经排好序的数列中的适当位置，
 * 使数列依然有序，当最后一个元素放入合适位置时，
 * 该数组排序完毕
 * 
 * 时间复杂度 O(n方)
 * 
 * 从第二个数开始往前比 大就往后排
 * 
 */
function insertSort(arr){
    const len = arr.length;
    for(let i=0; i<len; i++){
        let j = i;
        let val = arr[i];
        while(j > 0 && arr[j-1] > val){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            j--;
        }
        arr[j] = val;
    }
    return arr;
}

const InsertSort = (arr) => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        var currentIndex = i;
        var currentVal = arr[i];
        while(currentIndex > 0 && arr[currentIndex - 1] > currentVal) {
            [arr[currentIndex - 1], arr[currentIndex]] = [arr[currentIndex], arr[currentIndex - 1]];
            currentIndex--;
        }
        arr[currentIndex] = currentVal;
    }
    return arr
}