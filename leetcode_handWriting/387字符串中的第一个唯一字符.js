var firstUniqChar = function(s) {

    // 用对象存储每一个，存在就加一
    let obj = {};
    for(let i of s) {
        obj[i] = ( obj[i] || 0) + 1;
    }
    // 遍历查找
    for (let i = 0; i < s.length; i++) {
        // 这里使用s[i]
        if(obj[s[i]] == 1) {
            return i
        }
    }
    return -1
};