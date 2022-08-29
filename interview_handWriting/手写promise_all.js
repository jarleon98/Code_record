/*
Promise.all返回新的Promise实例 
接收一个可遍历的数据容器，容器每个元素都应是Promise实例
当每个Promise实例都成功时，Promise.all才成功
实例所有的resolve结果按照原顺序集合在数组中作为Promise.all的resolve结果
数组中只要一个Promise实例失败，Promise.all的.cath捕获该reject
 */
Promise.MyAll = function(promises) {
    // 数组收集promises的resolve结果
    let arr = [];
    // 设立计数器，当传入数组后+1，判断是否都成功了
    let count = 0;
    // 返回新的Promise实例
    return new Promise((resolve, reject) => {
        promises.forEach((item, i) => {
            Promise.resolve(item).then(res => {
                arr[i] = res;
                count += 1;
                // 如果都成功了，传递出去
                if(count === promises.length) {
                    resolve(arr);
                }
            }).catch(reject)    // 处理失败情况
        })
    });
};