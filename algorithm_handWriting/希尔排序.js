/**
 * 希尔排序是把记录按下标的一定增量分组，
 * 对每组使用直接插入排序算法排序；随着增量逐渐减少，
 * 每组包含的关键词越来越多，当增量减至 1 时，
 * 整个文件恰被分成一组，算法便终止
 * 
*/
function shellSort(arr){
    const len = arr.length;
    for(let gap = parseInt(len/2); gap > 0; gap = parseInt(len/2)){
        for(let i = gap; i < len; i++){
            for (let j = i - gap; j >= 0 && arr[j] > arr[j + gap]; j -= gap) {
                [arr[j], arr[j + gap]] = [arr[j + gap], arr[j]];
            }
        }
    }
    return arr;
}