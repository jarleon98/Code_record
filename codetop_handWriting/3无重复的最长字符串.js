/*
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
*/
const lengthOfLongestSubstring = (s) => {
    // 利用set 滑动窗口 i左边 j右边
    const set = new Set();
    let i = 0; j = 0;
    let maxlength = 0;
    for(j; j < s.length; j++) {
        if(!set.has(s[j])) {
            set.set(s[j]);
            // 更新长度
            maxlength = Math.max(maxlength, set.size);
        } else {
            // 遇到重复的，移动滑动窗口
            while(set.has(s[j])) {
                set.delete(s[i]);
                i++
            }
            set.set(s[j]);
        }
    }
    return maxlength
}