

// set 最长字串用滑动窗口
const lengthOfLongestSubstring = (s) => {
    const set = new Set();
    // 右边界i 左边界j
    let i = 0;
    let j = 0;
    let maxLength = 0;
    for(i; i < s.length; i++) {
        if(!set.has(s[i])) {
            set.add(s[i]);
            maxLength = Math.max(maxLength, set.size);
        } else {
            while(set.has(s[i])) {
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
        }
    };
    return maxLength
};


/*
abcabcbb

set abca
i = 3 j = 0

set bca j=1

set bcab
i = 4 j = 1

set cab j = 2

set cabc
i = 5 j = 2

set abc j=3

set abcb j = 3
set bcb 
i = 6 j = 4;





*/
