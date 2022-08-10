/**
 * 快速排序
 * 1.先设定一个分界值，通过分界值将数组分成左右两部分
 * 2.将大于或等于分界值的数据集中到数组右边，
 * 小于分界值的数据集中到数组的左边。
 * 3.左边和右边的数据可以独立排序，可以再次取分界值处理，递归。
 * 
 * 时间复杂度 O(nlogn)
 */
function quickSort(arr){
    const len = arr.length;
    if(len <= 1) return arr
    let midIndex = parseInt(len / 2);
    //取得中间值
    let midVal = arr.splice(midIndex, 1)[0];
    let right = [], left = [];
    for(let i of arr){
        i > midVal ? right.push(i) : left.push(i);   
    }
    //递归
    return [...quickSort(left), midVal, ...quickSort(right)];
}




const Quick = (arr) => {
    var len = arr.length;
    if(len <= 1) return arr
    let midIndex = parseInt(len / 2);
    let midVal = arr.splice(midIndex, 1)[0];
    let left = [], right = [];
    for(let i of arr) {
        i > midVal ? right.push(i) : left.push(i);
    }
    return [...Quick(left), midVal, ...Quick(right)]
}