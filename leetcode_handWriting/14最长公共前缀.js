
 var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return ""
    if(strs.length == 1) return strs[0]
    // 利用reduce方法 初始值strs[0]
    return strs.reduce(compareTwo, strs[0])
};

const compareTwo = (s1, s2) => {
    let res = '';
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] == s2[i]) {
            res += s1[i];
        } else {
            return res
        }
    }
    return res
};