// 1.排序法
var isVaildAnagram1 = function(s, t) {
    return [...s].sort().join("") === [...t].sort().join("")
}


// 2.哈希表

//构建哈希表函数 
let getMap = (str) => {
    if(typeof str !== 'string')
        return false
    let map = new Map();

    for(let i of str) {
        if(map.has(i)) {
            map.set(i, map.get(i)+1);
        } else {
            map.set(i, 1);
        }
    }
    return map
};
// 比较map
let compareMap = (map1, map2) => {
    if(map1.size !== map2.size)
        return false
    if(map1.size == map2.size && map1 == 0)
        return true
    for(let i of map1.keys()) {
        if(!(map2.has(i)))
            return false
        if(map1.get(i) !== map2.get(i))
            return false 
    }
    return true 
}
// 主程序
let isVaildAnagram2 = (s, t) => {
    return compareMap(getMap(s), getMap(t))
}