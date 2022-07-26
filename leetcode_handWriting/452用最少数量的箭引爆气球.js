/*
输入：points = [[10,16],[2,8],[1,6],[7,12]]
输出：2
解释：气球可以用2支箭来爆破:
-在x = 6处射出箭，击破气球[2,8]和[1,6]。
-在x = 11处发射箭，击破气球[10,16]和[7,12]。
*/

// 先排序，然后先定义第一个的结尾
// 用后面的开始和结尾比，大于的话+1，使用该区间的结尾

const findMinArrowShots = (points) => {
    if(!points.length) 
        return 0
    // 先用区间结尾排序    
    points = points.sort((a,b) => a[1] - b[1]);
    let res = 1;
    let check = points[0][1];
    for(let p of points) {
        if(p[0] > check) {
            res++;
            // 更新区间
            check = p[1];
        }
    }
    return res
};