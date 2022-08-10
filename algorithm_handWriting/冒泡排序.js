/**
 * 冒泡排序
 * 1.比较相邻的元素，如果第一个比第二个大，交换
 * 2.对每一对相邻元素做同样工作
 * 3.针对所有元素重复步骤，除了最后一个，直到没有任何一堆数字需要比较
 * 
 * 时间复杂度 O(n方)
*/
function bubbleSort(arr) {
    const len = arr.length;
    for(let i=len; i>0; i--){
        for(let j=0; j<i; j++){
            if(arr[j] < arr[j-1]){
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            }
        }
    }
    return arr;
}





const bubble = (arr) => {
    var len = arr.length;
    for(let i = len ; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] < arr[j-1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
        }
    }
    return arr
}

