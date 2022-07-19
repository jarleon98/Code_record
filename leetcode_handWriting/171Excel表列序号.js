/*
给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。
*/

// 26进制 数值 = 字母 - A + 1
// res = res * 26 + 数值

var titleToNumber = function(columnTitle) {
    let res = 0;
    for(let i = 0; i < columnTitle.length; i++) {
        // charAt 返回指定位置字符串
        // charCodeAt 返回指定位置字符的编码
        res = res * 26 + (columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1);
    }
    return res
};