
/* 
给你两个字符串 haystack 和 needle ，
请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
如果 needle 不是 haystack 的一部分，则返回  

*/

var strStr = function(haystack, needle) {
    if(needle.length == 0) {
        return 0
    }
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            // substring 提取字符串
            if(haystack.substring(i, i+needle.length) === needle) {
                return i
            }
        }
    }
    return -1
};