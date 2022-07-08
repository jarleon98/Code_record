
 var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    };
    let res = 0;
    let index = 0;
    const len = s.length;
    while(index < len) {
        if(index+1 < len && map[s.slice(index, index+2)]) {
            // 字符为2位
            res += map[s.slice(index, index+2)];
            index += 2;
        } else {
            // 字符为1位且存在
            res += map[s.slice(index, index+1)];
            index += 1;
        }
    }
    return res
};