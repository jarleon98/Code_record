
let time = '2022/5/5 16:15:20';

const formartTime = (time) => {
    let arr = time.split(' ');          //["2022/5/5", "16:15:20"]
    let leftArr = arr[0].split('/')     //["2022", "5", "5"]
    let rightArr = arr[1].split(':')    //["16", "15", "20"]
    let arrRes = leftArr.concat(rightArr);     //["2022", "5", "5", "16", "15", "20"]
    arrRes = arrRes.map(item => item.length < 2 ? '0'+item : item);
    time = `${arrRes[0]}年${arrRes[1]}月${arrRes[2]}日 ${arrRes[3]}时${arrRes[4]}分${arrRes[5]}秒`;
    return time
}